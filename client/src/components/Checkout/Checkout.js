import React from "react";
import "./Checkout.css";
import DeliveryContainer from "./DeliveryContainer";
import PaymentContainer from "./PaymentContainer";
import { useSelector, useDispatch } from "react-redux";
import Item from "../Cart/Item";
import { createOrderAsync } from "../../redux/misc/orderSlice";
import { sendMailAsync } from "../../redux/user/userSlice.js";
function Checkout() {
  const itemList = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleOrderSubmit = (orderData) => {
    dispatch(createOrderAsync(orderData));
    dispatch(sendMailAsync({ user: user, orderInfo: itemList }));
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
          <DeliveryContainer
            handleOrderSubmit={handleOrderSubmit}
            user={user}
          />

          {/* right */}
          <PaymentContainer handleOrderSubmit={handleOrderSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
