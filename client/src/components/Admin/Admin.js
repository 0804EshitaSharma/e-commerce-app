import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../redux/user/userSlice.js";
import { RoutePaths } from "../../utils/RoutePaths";

function Admin() {
  const navigate = useNavigate();
  const addNewProduct = () => {
    navigate(RoutePaths.AddProduct);
  };
  const viewAllProducts = () => {
    navigate(RoutePaths.Home);
  };
  return (
    <div>
      <CustomButton type="submit" label="Add Product" event={addNewProduct} />
      <CustomButton
        type="submit"
        label="All Products"
        event={viewAllProducts}
      />
    </div>
  );
}

export default Admin;
