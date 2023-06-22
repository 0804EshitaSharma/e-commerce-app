import React from "react";
import "./CustomDropdown.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function CustomDropdown({ name }) {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const menu = [
    {
      name: "Profile",
      to: "/user",
    },
  ];
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
