import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const addNewProduct = () => {
    console.log("Add new Product");
    navigate("/addProduct");
  };
  const viewUsers = () => {
    console.log("view All Users");
  };
  return (
    <div>
      <CustomButton type="submit" label="Add Product" event={addNewProduct} />
      <CustomButton type="submit" label="All Products" event={viewUsers} />
    </div>
  );
}

export default Admin;
