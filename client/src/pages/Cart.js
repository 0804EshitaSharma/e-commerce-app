import Item from "../components/Cart/Item.js";
import "../components/Cart/Cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeAllInCart } from "../redux/cart/cartSlice.js";

function Cart() {
  const itemList = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  const calcTotalPrice = () => {
    let totalPrice = 0;
    for (const item of itemList) {
      let priceForQuantity = parseFloat(
        (Number(item.productDetails.Price) * Number(item.quantity)).toFixed(2)
      );
      totalPrice += priceForQuantity;
    }
    return totalPrice;
  };
  let totalPrice = calcTotalPrice();
  return (
    <>
      <div className="container-shoppingCart">
        <div className="card-shoppingCart">
          <h1 className="cart-header">
            Shopping Cart
            <button
              className="removeAll-button"
              onClick={() => {
                dispatch(removeAllInCart());
              }}
            >
              Remove All
            </button>
          </h1>
          <hr className="cart-hr" />
          <h4 className="price-header">Price</h4>
          {itemList.map((currItem, index) => {
            return <Item key={index} item={currItem} />;
          })}
          <hr className="cart-hr" />
          <h4 className="price-header">
            Total Price
            <br />
            <br />${totalPrice}
          </h4>
          <button className="checkout-button">
            <Link id="checkout-link" to="/checkout">
              Proceed to Checkout
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
