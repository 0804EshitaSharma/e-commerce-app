import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CustomButton from "../Custom/CustomButton";
import CustomFormInput from "../Custom/CustomFormInput";
import CustomFormTextArea from "../Custom/CustomFormTextArea";
import CustomSelect from "../Custom/CustomSelect";
import "./EditProductForm.css";
import { updateItemAsync } from "../../redux/item/itemSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProductForm({ item }) {
  const { handleSubmit, reset, register } = useForm({});
  const dispatch = useDispatch();
  const formSubmit = (event) => {
    dispatch(updateItemAsync({ id: item._id, data: event }));
    toast.success("Updated Product!", {
      position: "bottom-right",
      theme: "colored",
      autoClose: 2000,
    });
  };


  const categories = [
    { id: 1, text: "Choose a Category----" },
    { id: 2, text: "Electronics" },
    { id: 3, text: "Home" },
    { id: 4, text: "Books" },
  ];
  return (
    <>
      <form className="item-form-container">
        <div>
          <CustomFormInput
            name="name"
            id="name"
            type="text"
            placeholder="Item Name"
            defaultValue={item?.name}
            label="Item Name:"
            register={{ ...register("name", { required: true }) }}
          />
          <CustomFormInput
            name="price"
            id="price"
            type="number"
            placeholder="Item Price"
            defaultValue={item?.price}
            label="Item Price:"
            register={{ ...register("price", { required: true }) }}
          />
          <CustomFormTextArea
            name="description"
            id="description"
            placeholder="Item Description"
            label="Item Description:"
            defaultValue={item?.description}
            rows="5"
            cols="65"
            register={{ ...register("description", { required: true }) }}
          />
          <CustomFormInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="Item Quantity"
            defaultValue={item?.quantity}
            label="Item Quantity:"
            register={{ ...register("quantity", { required: true }) }}
          />
          <CustomFormInput
            name="rating"
            id="rating"
            type="number"
            placeholder="Item Rating"
            defaultValue={item?.rating}
            label="Item Rating:"
            register={{ ...register("rating", { required: true }) }}
          />
          <CustomSelect
            id="category"
            name="category"
            label="Item Category:"
            defaultValue={item?.category}
            register={{ ...register("category", { required: true }) }}
            categories={categories}
          />
          <CustomFormInput
            name="images"
            id="images"
            type="text"
            placeholder="Item Image"
            label="Item Image:"
            defaultValue={item?.images[0]}
            register={{ ...register("images", { required: true }) }}
          />

          <CustomButton
            type="submit"
            label="Update"
            event={handleSubmit(formSubmit)}
          />
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default EditProductForm;
