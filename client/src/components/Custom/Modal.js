import React from "react";
import CustomButton from "./CustomButton.js";
import "./Modal.css";
/* Reference from Assignment 2 */
function Modal({ heading, content, closeModal }) {
  return (
    <div>
      <div className="modal_wrapper"></div>
      <div className="modal_content">
        <h3 className="modal_heading">{heading}</h3>
        <hr />

        <p>{content}</p>
        <div className="button_container">
          <button className="close_button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
