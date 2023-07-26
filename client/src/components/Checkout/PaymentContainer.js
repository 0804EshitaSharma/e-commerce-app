import React, { useState } from "react";
import "./Checkout.css";
import LabeledInput from "../Custom/LabeledInput";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../utils/RoutePaths";

function PaymentContainer({ handleOrderSubmit }) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [formValid, setFormValid] = useState(false);

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

    const orderData = {
      cardHolder,
      cardNumber,
      expiryDate,
      cvv,
    };
    handleOrderSubmit(orderData);

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

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h4>Payment method</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <LabeledInput
                className="col-md-12"
                name="cardHolder"
                type="text"
                label="Card holder"
                placeholder="Enter card holder"
                value={cardHolder}
                onChange={handleInputChange}
                required={true}
              />
              <LabeledInput
                className="col-md-12"
                name="cardNumber"
                type="text"
                label="Card number"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={handleInputChange}
                required={true}
              />
              <LabeledInput
                className="col-md-6"
                name="expiryDate"
                type="text"
                label="Expiry date"
                placeholder="Enter expiry date"
                value={expiryDate}
                onChange={handleInputChange}
                required={true}
              />
              <LabeledInput
                className="col-md-6"
                name="cvv"
                type="text"
                label="CVV"
                placeholder="Enter CVV"
                value={cvv}
                onChange={handleInputChange}
                required={true}
              />
              <div className="col-md-12">
                <div className="info-group mb-3">
                  <button className="btn" type="submit" disabled={!formValid}>
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
