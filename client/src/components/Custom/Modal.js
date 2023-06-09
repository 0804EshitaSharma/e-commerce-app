import React from "react";
import CustomButton from "./CustomButton.js";
import "./Modal.css";

function Modal({ heading, content, closeModal }) {
  return (
    <div>
      <div className="modal_wrapper"></div>
      <div className="modal_content">
        <h3 className="modal_heading">{heading}</h3>
        <p>{content}</p>
        <div className="button_container">
          <CustomButton
            className="modal_button"
            label="Close"
            event={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
