import React, { useState } from "react";
import CustomButton from "../Custom/CustomButton.js";
import CustomFormInput from "../Custom/CustomFormInput.js";
import "./Form.css";
import { useForm } from "react-hook-form";
import {
  confirmPasswordReset,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Custom/Modal.js";
import { auth } from "../../firebase/firebaseConfig";
import { loggedInUser } from "../../redux/user/userSlice.js";
import { useDispatch } from "react-redux";

/* Reference from Assignment2 and https://firebase.google.com/docs/auth/web/password-auth */
function Form({
  heading,
  showEmail,
  showPassword,
  label,
  showSignUpLink,
  query,
}) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register, reset } = useForm({});
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const verifyUser = (event) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, event.username, event.userpassword)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        if (user) {
          const userObject = {
            name: user.displayName,
            email: user.email,
            id: user.uid,
          };
          dispatch(loggedInUser(userObject));
          setIsLoading(false);
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMessage("Invalid Email Address found.");
            break;
          case "auth/user-disabled":
            setErrorMessage("Your account is disabled.");
            break;
          case "auth/user-not-found":
            setErrorMessage(
              "User Not found,Please Sign up to create a new account."
            );
            break;
          case "auth/wrong-password":
            setErrorMessage("Invalid User Password found.");
            break;
          default:
            setErrorMessage(error.message);
        }

        setShowModal(true);
      });
  };
  /* Learned from https://www.youtube.com/watch?v=MsDjbWUn3IE */
  const sendResetPasswordEmail = (event) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, event.username, {
      url: "http://localhost:3000/login",
    })
      .then(() => {
        setIsLoading(false);
        setErrorMessage("Please Check Your Email and reset your password.");
        setShowModal(true);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            setErrorMessage("Invalid Email Address found.");
            setShowModal(true);
            break;
          default:
            setErrorMessage(error.message);
            setShowModal(true);
        }
      });
  };
  /* Learned from https://www.youtube.com/watch?v=MsDjbWUn3IE */
  const resetPassword = (event) => {
    return confirmPasswordReset(
      auth,
      query.get("oobCode"),
      event.userpassword
    ).then(navigate("/login"));
  };
  /* Referred from https://www.npmjs.com/package/react-spinners */
  return (
    <>
      {isLoading && (
        <ClipLoader
          color="#369cd6"
          loading={isLoading}
          speedMultiplier={1}
          size={40}
          cssOverride={override}
        />
      )}
      <div>
        <form className="container">
          <div>
            <h1>{heading}</h1>
            {showEmail && (
              <CustomFormInput
                name="username"
                id="username"
                type="text"
                label="Email"
                placeholder="Enter Email"
                register={{ ...register("username", { required: true }) }}
              />
            )}
            {showPassword && (
              <CustomFormInput
                name="userpassword"
                id="userpassword"
                type="password"
                label="Password"
                placeholder="Enter Password"
                register={{ ...register("userpassword", { required: true }) }}
              />
            )}
            <CustomButton
              type="submit"
              label={label}
              event={
                label === "Continue"
                  ? handleSubmit(verifyUser)
                  : label === "Reset"
                  ? handleSubmit(resetPassword)
                  : handleSubmit(sendResetPasswordEmail)
              }
            />
            {showSignUpLink && (
              <Link to="/signup">
                <span>Create your account</span>
              </Link>
            )}
          </div>
        </form>
        {showModal && (
          <Modal
            heading="Notification"
            content={errorMessage}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default Form;
