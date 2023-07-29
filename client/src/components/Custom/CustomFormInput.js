import React from "react";
import "./CustomFormInput.css";

/* Reference from Assignment 2 */
function CustomFormInput({
  id,
  name,
  type,
  label,
  register,
  placeholder,
  defaultValue,
  readOnly,
}) {
  return (
    <div className="custom_form_container">
      <label className="input_label_field" htmlFor={id}>
        {label}
      </label>
      <input
        className="form_input"
        name={name}
        autoComplete="off"
        id={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register}
      ></input>
    </div>
  );
}

export default CustomFormInput;
