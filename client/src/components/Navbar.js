import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar_title">E-Commerce</span>
      <div className="navbar_search">
        <input className="navbar_search_input" type="text"></input>
        <svg
          className="navbar_search_icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="navbar_links">
        <div className="navbar_link_1">
          <span className="navbar_link_heading_1">Hello Guest</span>
          <Link to="/login">
            <span className="navbar_link_heading_2">Sign in</span>
          </Link>
        </div>
        <div className="navbar_link_2">
          <span className="navbar_link_heading_1">Returns</span>
          <span className="navbar_link_heading_2">& Orders</span>
        </div>
        <div className="navbar_link_3">
          <svg
            className="navbar_shopping-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="navbar_shopping-icon_count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
