import React, { useState } from "react";
import "./Checkout.css";
import LabeledInput from "../Custom/LabeledInput";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/RoutePaths";
import { useDispatch } from "react-redux";
import { removeAllInCart } from "../../redux/cart/cartSlice";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import "./PaymentContainer.css";

function PaymentContainer({ handleOrderSubmit, itemList, orderData, setOrderData }) {
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [focus, setFocus] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            cardHolder.trim() === "" ||
            cardNumber.trim() === "" ||
            expiryDate.trim() === "" ||
            cvv.trim() === ""
        ) {
            return;
        }

        console.log("Submitting order data:", orderData);

        handleOrderSubmit(orderData);

        dispatch(removeAllInCart());

        navigate(RoutePaths.OrderPlaced);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "cardHolder") {
            setCardHolder(value);
        } else if (name === "cardNumber") {
            setCardNumber(value);
        } else if (name === "expiryDate") {
            setExpiryDate(value);
        } else if (name === "cvv") {
            setCvv(value);
        }

        setFormValid(
            cardHolder.trim() !== "" &&
            cardNumber.trim() !== "" &&
            expiryDate.trim() !== "" &&
            cvv.trim() !== ""
        );
    };

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
      }

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    <h4 className="header">Payment</h4>
                </div>
                <div className="card-body">
                    <Cards
                        cvc={cvv}
                        expiry={expiryDate}
                        focused={focus}
                        name={cardHolder}
                        number={cardNumber}
                    />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <input
                                className="col-md-12"
                                id="box"
                                name="cardHolder"
                                type="text"
                                label="Card holder"
                                placeholder="Enter card holder"
                                value={cardHolder}
                                onChange={handleInputChange}
                                required={true}
                                onFocus={handleInputFocus}
                            />
                            <input
                                className="col-md-12"
                                id="box"
                                name="cardNumber"
                                type="tel"
                                label="Card number"
                                placeholder="Enter card number"
                                value={cardNumber}
                                onChange={handleInputChange}
                                required={true}
                                onFocus={handleInputFocus}
                            />
                            <input
                                className="col-md-6"
                                id="box"
                                name="expiryDate"
                                type="text"
                                label="Expiry date"
                                placeholder="Expiry date MM/YY"
                                value={expiryDate}
                                onChange={handleInputChange}
                                required={true}
                                onFocus={handleInputFocus}
                            />
                            <input
                                className="col-md-6"
                                id="box"
                                name="cvv"
                                type="tel"
                                label="CVV"
                                placeholder="Enter CVV"
                                value={cvv}
                                onChange={handleInputChange}
                                required={true}
                                onFocus={handleInputFocus}
                            />
                            <div className="col-md-12">
                                <div className="info-group mb-3">
                                    <button
                                        className="btn"
                                        type="submit"
                                        disabled={!formValid}
                                    >
                                        Submit Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentContainer;
