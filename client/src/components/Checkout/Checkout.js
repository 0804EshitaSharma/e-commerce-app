import React from "react";
import "./Checkout.css";
import DeliveryContainer from "./DeliveryContainer";
import PaymentContainer from "./PaymentContainer";
import { useSelector, useDispatch } from "react-redux";
import Item from "../Cart/Item";
import { createOrderAsync } from "../../redux/misc/orderSlice";

function Checkout() {
  const itemList = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();

  const handleOrderSubmit = (orderData) => {
    dispatch(createOrderAsync(orderData));
  };

  return (
    <div>
      <h2> Checkout </h2>
      <div className="container-lg">
        <div className="row">
          {/* Display items */}
          <div className="item-list-container">
            {itemList.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </div>
          {/* left */}
          <DeliveryContainer handleOrderSubmit={handleOrderSubmit} />

          {/* right */}
          <PaymentContainer handleOrderSubmit={handleOrderSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
