import React from "react";
import CustomButton from "../Custom/CustomButton";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const addNewProduct = () => {
    navigate("/addProduct");
  };
  const viewAllProducts = () => {
    navigate("/");
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
