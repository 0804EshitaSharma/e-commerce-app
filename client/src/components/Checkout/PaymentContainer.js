import React from "react";
import "./Checkout.css";
import LabeledInput from "../Custom/LabeledInput";

function PaymentContainer() {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    <h4>Payment method</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <LabeledInput
                            className="col-md-12"
                            name="cardHolder"
                            type="text"
                            label="Card holder"
                            placeholder="Enter card holder"
                        />
                        <LabeledInput
                            className="col-md-12"
                            name="cardNumber"
                            type="text"
                            label="Card number"
                            placeholder="Enter card number"
                        />
                        <LabeledInput
                            className="col-md-6"
                            name="expiryDate"
                            type="text"
                            label="Expiry date"
                            placeholder="Enter expiry date"
                        />
                        <LabeledInput
                            className="col-md-6"
                            name="cvv"
                            type="text"
                            label="CVV"
                            placeholder="Enter CVV"
                        />
                        <div className="col-md-12">
                            <div className="info-group mb-3">
                                <button className="btn">
                                    {" "}
                                    Place order{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentContainer;