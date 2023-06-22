import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserProfile.css";
import CustomButton from "../Custom/CustomButton";
import CustomFormInput from "../Custom/CustomFormInput";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { updateUserInfo } from "../../redux/userSlice.js";

function UserProfile() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, reset, register } = useForm({});
  const changePassword = () => {
    navigate("/forgot-password");
  };
  const updateUser = (event) => {
    console.log(event);
    const currentUser = auth.currentUser;
    updateProfile(currentUser, {
      displayName: event.accountholder,
      email: event.email,
      address: event.address,
      phone: event.phone,
    })
      .then(() => {
        dispatch(
          updateUserInfo({
            displayName: event.accountholder,
            email: event.email,
            address: event.address,
            phone: event.phone,
          })
        );
        console.log("Profile updated successfully.");
        console.log(user);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };
  return (
    <div className="profile_container">
      <form>
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
                register={{ ...register("accountholder") }}
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
                register={{ ...register("email") }}
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
                value={user?.phone}
                register={{ ...register("phone") }}
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
                name="Address"
                id="address"
                type="text"
                value={user?.address}
                label="Address"
                register={{ ...register("address") }}
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
        </div>
        <CustomButton label="Save" event={handleSubmit(updateUser)} />
        <CustomButton label="Change Password" event={changePassword} />
      </form>
    </div>
  );
}

export default UserProfile;
