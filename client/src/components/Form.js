import React from "react";
import CustomButton from "./CustomButton.js";
import CustomFormInput from "./CustomFormInput.js";
import "./Form.css";

function Form() {
  return (
    <div>
      <form>
        <div className="container">
          <h1>Sign in</h1>
          <CustomFormInput
            name="username"
            id="username"
            type="text"
            label="Enter mobile phone number or email"
          />
          <CustomButton type="submit" label="Continue" />
          <p>By continuing, you agree to our terms ans conditions</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
