import "../OrderHistory/OrderHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAsync } from "../../redux/orders/orderThunks";
import { auth } from "../../firebase/firebaseConfig";
import { useEffect } from "react";
import Order from "./Order";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../utils/RoutePaths.js";

function OrderHistory() {
  const list = useSelector((state) => state.orders.list);
  const dispatch = useDispatch();
  const userID = auth.currentUser.uid;
  useEffect(() => {
    dispatch(getOrdersAsync(userID));
  }, []);

  return (
    <div className="orderhistory-container">
      <div className="orderhistory-header-search-content">
        <h1 className="orderhistory-header">Order History</h1>
        {/*        <div className="orderhistory-searchbar">
           <input
            className="orderhistory-search"
            type="text"
            placeholder="Search your orders"
          ></input>
          <svg
            className="orderhistory_search_icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div> */}
      </div>
      <hr className="orderhistory-hr" />
      {list.length !== 0 ? (
        list.map((order) => {
          return <Order key={order._id} order={order} />;
        })
      ) : (
        <div>
          <h3>No orders made yet</h3>
          <Link to={RoutePaths.Home}>
            <button className="wishlist-button" id="browse">
              Browse Products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
