import React from "react";
import "./CustomSelect.css";
function CustomSelect({ id, name, label, register, categories, event }) {
  const options = categories.map((option) => (
    <option key={option.id} value={option.text}>
      {option.text}
    </option>
  ));

  return (
    <div>
      {label ? (
        <label className="input_field_label" htmlFor={id}>
          {label}
        </label>
      ) : (
        ""
      )}
      <select
        className="select_container"
        id={id}
        name={name}
        {...register}
        onChange={event}
      >
        {options}
      </select>
    </div>
  );
}

export default CustomSelect;
