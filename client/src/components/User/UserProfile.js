import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserProfile.css";
import CustomButton from "../Custom/CustomButton";
import CustomFormInput from "../Custom/CustomFormInput";
import { useNavigate } from "react-router-dom";
function UserProfile() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const changePassword = () => {
    navigate("/forgot-password");
  };
  return (
    <div className="profile_container">
      <div className="profile_input">
        <div className="image_uploader">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
        </div>
        <div className="input_row">
          <div className="profile_input_field">
            <CustomFormInput
              name="Account Holder"
              id="accountholder"
              type="text"
              value={user?.name}
              label=" Account Holder"
            />
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="edit_icon"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </div>
        </div>
        <div className="input_row">
          <div className="profile_input_field">
            <CustomFormInput
              name="Email Address"
              id="email"
              type="email"
              label="Email Address"
              value={user?.email}
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="edit_icon"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </div>
        <div className="input_row">
          <div className="profile_input_field">
            <CustomFormInput
              name="Mobile Number"
              id="phone"
              type="phone"
              label="Mobile Number"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="edit_icon"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </div>
      </div>
      <CustomButton label="Change Password" event={changePassword} />
    </div>
  );
}

export default UserProfile;
