import React from "react";
import "./Checkout.css";
import DeliveryContainer from "./DeliveryContainer";
import PaymentContainer from "./PaymentContainer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Item from "../Cart/Item";
import { createOrderAsync } from "../../redux/orderSlice";
// import { createOrderAsync } from "../../redux/misc/orderSlice";
import { sendMailAsync } from "../../redux/user/userSlice.js";

import { auth } from "../../firebase/firebaseConfig";
import {
    getUserInfoAsync,
} from "../../redux/user/userSlice.js";
// import { ObjectId } from "mongoose"; 

function Checkout() {
    const itemList = useSelector((state) => state.cart.itemsList);
    const dispatch = useDispatch();
    // const currentUser = auth.currentUser;

    // useEffect(() => {
    //     if (currentUser != null) {
    //         dispatch(getUserInfoAsync(currentUser.uid));
    //     }
    // }, [dispatch]);

    const user = useSelector((state) => state.user.user);

    const [orderData, setOrderData] = useState({
        items: itemList,
        deliveryOption: "",
        user: user._id,
    });

    const handleOrderSubmit = (orderData) => {
        dispatch(createOrderAsync(orderData));
        // dispatch(sendMailAsync({ user: user, orderInfo: itemList }));
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
                    <DeliveryContainer handleOrderSubmit={handleOrderSubmit} orderData={orderData} setOrderData={setOrderData} />

                    {/* right */}
                    <PaymentContainer handleOrderSubmit={handleOrderSubmit} orderData={orderData} setOrderData={setOrderData}  />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
