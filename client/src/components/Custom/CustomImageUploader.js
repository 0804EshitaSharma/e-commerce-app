import React, { useState } from "react";

function CustomImageUploader({ register, id ,event}) {


  return (
    <div>
      <label className="input_field_label" htmlFor="images">
        Item Images:
      </label>
      <input
        id={id}
        type="file"
        multiple
        onChange={event}
        {...register}
      />

     {/* <div>
        {selectedImages.map((image, index) => (
          <img
            className="image_uploader"
            src={image}
            key={index}
            alt={`Selected Image ${index}`}
          />
        ))}
      </div> */}
    </div> 
  );
}

export default CustomImageUploader;
