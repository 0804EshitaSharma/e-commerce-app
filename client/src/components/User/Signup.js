import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CustomButton from "../Custom/CustomButton.js";
import CustomFormInput from "../Custom/CustomFormInput.js";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import Modal from "../Custom/Modal.js";
import "./Signup.css";

function Signup() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({});
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const createUser = (event) => {
    console.error(event.username);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, event.useremail, event.userpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = event.username;
        console.log(user);
        navigate("/login");
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
      <div>
        <form className="container">
          <h1>Sign Up</h1>
          <CustomFormInput
            name="firstname"
            id="firstname"
            type="text"
            label="First Name"
            placeholder="Enter First Name"
            register={{ ...register("firstname", { required: true }) }}
          />
          <CustomFormInput
            name="lastname"
            id="lastname"
            type="text"
            label="Last Name"
            placeholder="Enter Last Name"
            register={{ ...register("lastname", { required: true }) }}
          />
          <CustomFormInput
            name="useremail"
            id="useremail"
            type="text"
            label="Email"
            placeholder="Enter Email"
            register={{ ...register("useremail", { required: true }) }}
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
            event={handleSubmit(createUser)}
          />
        </form>
        {showModal && <Modal heading="Notification" content={errorMessage} />}
      </div>
    </div>
  );
}

export default Signup;
