import React, { useState } from "react";
import CustomButton from "../Custom/CustomButton.js";
import CustomFormInput from "../Custom/CustomFormInput.js";
import "./Form.css";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Custom/Modal.js";
import { auth } from "../../firebase/firebaseConfig";

/* Reference from Assignment2 and https://firebase.google.com/docs/auth/web/password-auth */
function Form() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm({});

  const closeModal = () => {
    setShowModal(false);
  };
  const verifyUser = (event) => {
    signInWithEmailAndPassword(auth, event.username, event.userpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          reset();
          navigate("/");
          //Todo will replace this piece of code.
          window.location.reload();
        }
      })
      .catch((error) => {
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
          setErrorMessage(error.errorMessage);
        }

        setShowModal(true);
      });
  };
  return (
    <div>
      <form className="container">
        <div>
          <h1>Sign in</h1>
          <CustomFormInput
            name="username"
            id="username"
            type="text"
            label="Email"
            placeholder="Enter Email"
            register={{ ...register("username", { required: true }) }}
          />
          <CustomFormInput
            name="userpassword"
            id="userpassword"
            type="password"
            label="Password"
            placeholder="Enter Password"
            register={{ ...register("userpassword", { required: true }) }}
          />
          <CustomButton
            type="submit"
            label="Continue"
            event={handleSubmit(verifyUser)}
          />
          <Link to="/signup">
            <span>Create your account</span>
          </Link>
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
  );
}

export default Form;
