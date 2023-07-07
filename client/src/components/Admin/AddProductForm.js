import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Custom/CustomButton";
import CustomFormInput from "../Custom/CustomFormInput";
import CustomFormTextArea from "../Custom/CustomFormTextArea";
import { v4 as uuidv4 } from "uuid";
import CustomSelect from "../Custom/CustomSelect";
import CustomImageUploader from "../Custom/CustomImageUploader";
import "./AddProductForm.css";

function AddProductForm() {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm({});
  const [selectedImages, setSelectedImages] = useState([]);
  const dispatch = useDispatch();
  const formSubmit = (event) => {
    event = {
      ...event,
      id: uuidv4(),
    };
    console.error(event);
    // dispatch(addItemAsync(event));
    reset();
    navigate("/");
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    console.error(files);
    setSelectedImages(imagesArray);
  };

  const clearForm = () => {
    reset();
  };

  const categories = [
    { id: 1, text: "Choose a Category----" },
    { id: 2, text: "Electronics" },
    { id: 3, text: "Home" },
    { id: 4, text: "Books" },
  ];
  return (
    <form className="item-form-container">
      <div>
        <CustomFormInput
          name="name"
          id="name"
          type="text"
          placeholder="Item Name"
          label="Item Name:"
          register={{ ...register("name", { required: true }) }}
        />
        <CustomFormInput
          name="price"
          id="price"
          type="number"
          placeholder="Item Price"
          label="Item Price:"
          register={{ ...register("price", { required: true }) }}
        />
        <CustomFormTextArea
          name="description"
          id="description"
          placeholder="Item Description"
          label="Item Description:"
          rows="5"
          cols="65"
          register={{ ...register("description", { required: true }) }}
        />
        <CustomFormInput
          name="quantity"
          id="quantity"
          type="number"
          placeholder="Item Quantity"
          label="Item Quantity:"
          register={{ ...register("quantity", { required: true }) }}
        />
        <CustomFormInput
          name="rating"
          id="rating"
          type="number"
          placeholder="Item Rating"
          label="Item Rating:"
          register={{ ...register("rating", { required: true }) }}
        />
        <CustomSelect
          id="category"
          name="category"
          label="Item Category:"
          register={{ ...register("category", { required: true }) }}
          categories={categories}
        />
        <CustomImageUploader
          id="images"
          event={handleImageChange}
          register={{ ...register("images", { required: true }) }}
        />

        <CustomButton
          type="submit"
          label="Create"
          event={handleSubmit(formSubmit)}
        />
      </div>
    </form>
  );
}

export default AddProductForm;
