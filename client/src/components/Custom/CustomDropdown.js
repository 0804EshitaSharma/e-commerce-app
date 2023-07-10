import React from "react";
import "./CustomDropdown.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loggedOut } from "../../redux/user/userSlice.js";

function CustomDropdown({ name }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(loggedOut());
        navigate("/");
      })
      .catch((error) => {});
  };
  const menu = [
    {
      name: "Profile",
      to: "/user",
    },
    {
      name: "Admin",
      to: "/login",
    },
  ];
  /* Learned from https://www.youtube.com/watch?v=bOx2WmyZrno */
  return (
    <div className="menu_container">
      <ul>
        {menu.map((i, index) => (
          <li key={index}>
            <Link to={i.to}>{i.name}</Link>
          </li>
        ))}
        <li onClick={logOut}>Log Out</li>
      </ul>
    </div>
  );
}

export default CustomDropdown;
