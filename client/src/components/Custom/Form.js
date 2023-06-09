import React, { useState } from "react";
import CustomButton from "../Custom/CustomButton.js";
import CustomFormInput from "../Custom/CustomFormInput.js";
import "./Form.css";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Custom/Modal.js";

function Form() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
  } = useForm({});

  const verifyUser = (event) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, event.username, event.userpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          const name = event.username;
         navigate(`/${name}`);
        } else {
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(error);
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
      {showModal && <Modal heading="Notification" content={errorMessage} />}
    </div>
  );
}

export default Form;
