import React from "react";
import "./Checkout.css";
import { useState } from "react";
import LabeledInput from "../Custom/LabeledInput";
import DeliveryContainer from "./DeliveryContainer";
import PaymentContainer from "./PaymentContainer";

function Checkout() {
    // pass in props from the shopping cart page, such as item, price, etc.

    return (
        <div>
            <h2> Checkout </h2>
            <div className="container-lg">
                <div className="row">
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
