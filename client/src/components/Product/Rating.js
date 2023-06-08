import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Rating.css";

function Rating({ ratings }) {
  const showStars = Array.from({ length: 5 }, (star, key) => {
    let value = key + 0.5;
    return (
      <span key={key}>
        {ratings >= key + 1 ? (
          <FaStar className="star" />
        ) : ratings >= value ? (
          <FaStarHalfAlt className="star" />
        ) : (
          <AiOutlineStar className="star" />
        )}
      </span>
    );
  });
  return (
    <div>
      {showStars} <span>{ratings}</span>
    </div>
  );
}

export default Rating;
