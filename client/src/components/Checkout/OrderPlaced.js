import React, { useState, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import "./OrderPlaced.css";

function OrderPlaced() {

    //TODO: clear all previous state, for example shopping cart

    return (
        <div>
            <div className="wrapper">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Your order number is </p>
                <p className="email-msg">A copy of the order information has been sent to your email.</p>
            </div>
        </div>
    )
}

export default OrderPlaced;