import React from "react";
import "./CustomDropdown.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../../redux/user/userSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutePaths } from "../../utils/RoutePaths";
import { removeAllInCart } from "../../redux/cart/cartSlice";
import { clearWishlist } from "../../redux/wishlist/wishlistSlice";

function CustomDropdown() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(loggedOut());
        dispatch(removeAllInCart());
        dispatch(clearWishlist());
        navigate(RoutePaths.Home);
      })
      .catch((error) => {
        toast.error("error", {
          position: "bottom-right",
          theme: "colored",
          autoClose: 2000,
        });
      });
    toast.success("User Logged Out!", {
      position: "bottom-right",
      theme: "colored",
      autoClose: 2000,
    });
  };
  let menu = [
    {
      name: "Profile",
      to: RoutePaths.Profile,
    },
  ];
  if (user?.firstname === "Admin") {
    menu.push({
      name: "Add Product",
      to: RoutePaths.AddProduct,
    });
  }

  /* Learned from https://www.youtube.com/watch?v=bOx2WmyZrno */
  return (
    <>
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
      <ToastContainer />
    </>
  );
}

export default CustomDropdown;
