import "../OrderHistory/OrderHistory.css";
import OrderItem from "./OrderItem.js";
import { useSelector } from "react-redux";

function Order({ order }) {
  const user = useSelector((state) => state.user.user);
  let address = "No address assigned yet";
  if (user.address) {
    address = user.address;
  }
  //console.log(user);
  return (
    <div className="orderhistory-card">
      <div className="order-info-container">
        <h4 className="order-date">Date Order Placed: {order.date}</h4>
        <button className="track-package-button">Track your package</button>
        <h4 className="ship-to-info">
          Ship To: {`${user.firstname} ${user.lastname}`}
        </h4>
        <dialog className="user-info-popup">Address: {address}</dialog>
      </div>
      <div className="ordered-item-container">
        {order.items.map((currItem, index) => {
          return (
            <>
              <OrderItem key={index} item={currItem} />
              <hr className="orderhistory-card-hr" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Order;
