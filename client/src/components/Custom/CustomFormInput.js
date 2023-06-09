import React from "react";
import "./CustomFormInput.css";

/* Reference from Assignment 2 */
function CustomFormInput({ id, name, type, label, register, placeholder }) {
  return (
    <div className="form_container">
      <label className="input_field_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form_input"
        name={name}
        autoComplete="off"
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      ></input>
    </div>
  );
}

export default CustomFormInput;
