import React from "react";
import "./Checkout.css";
import DeliveryContainer from "./DeliveryContainer";
import PaymentContainer from "./PaymentContainer";
import { useSelector } from "react-redux";
import Item from "../Cart/Item";


function Checkout() {
    // pass in props from the shopping cart page, such as item, price, etc.
    const itemList = useSelector((state) => state.cart.itemsList);

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
                    <DeliveryContainer />

                    {/* right */}
                    <PaymentContainer />
                </div>
            </div>
        </div>
    );
}

export default Checkout;
