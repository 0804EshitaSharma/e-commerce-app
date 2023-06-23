import "../Cart/Item.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeOne } from "../../redux/cart/actions";

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
        <img className="item-image" src={item.image} alt="Broken link" />
      </div>
      <div
        className="name-container"
        onClick={() => {
          navigate("/product");
        }}
      >
        <h1>{item.name}</h1>
      </div>
      <div className="price-container">
        <h1 className="price-value">${item.price}</h1>
        <button
          className="remove-button"
          onClick={() => {
            dispatch(removeOne(item));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default Item;
