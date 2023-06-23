import "../Cart/Item.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import QuantityButton from "../ProductPage/QuantityButton";
import { removeProductFromCart } from "../../redux/cart/cartSlice";
import { useEffect } from "react";

function Item({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div id="item-container">
      <div
        className="image-container"
        onClick={() => {
          navigate("/product");
        }}
      >
        <img
          className="item-image"
          src={item.productDetails.imgURLs[0]}
          alt="Broken link"
        />
      </div>
      <div className="name-quantity-container">
        <h3
          onClick={() => {
            navigate("/product");
          }}
        >
          {item.productDetails.name}
        </h3>
        <h3>Quantity: {item.quantity}</h3>
      </div>
      <div className="price-container">
        <h1 className="price-value">
          ${item.productDetails.price * item.quantity}
        </h1>
        <button
          className="remove-button"
          onClick={() => {
            dispatch(removeProductFromCart(item));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default Item;
