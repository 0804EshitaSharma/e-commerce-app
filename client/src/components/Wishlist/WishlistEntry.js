import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/wishlistSlice";
import "./Wishlist.css";
import { useNavigate } from "react-router-dom";

export default function WishlistEntry({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const remove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="wishlist-entry-wrapper">
      <div className="entry">
        <div
          className="img-wrapper"
          onClick={() => navigate(`/product/${item.name}`, { state: { item } })}
        >
          <img src={item.images[0]} alt={item.name} />
          <p>{item.name}</p>
        </div>

        <div className="wishlist-button-price-wrapper">
          <div className="price">
            <h4>{item.price}</h4>
          </div>
          <div className="wishlist-entry-buttons-wrapper">
            <button className="wishlist-button">Add to Cart</button>
            <button className="wishlist-button">Buy Now</button>
            <button className="wishlist-button" onClick={remove}>
              Remove
            </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
