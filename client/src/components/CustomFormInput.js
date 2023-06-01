import React from "react";

function CustomFormInput({ id, name, type, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type}></input>
    </div>
  );
}

export default CustomFormInput;
