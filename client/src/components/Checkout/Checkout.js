import React from "react";
import "./Checkout.css";
import { useState } from "react";
import LabeledInput from "../Custom/LabeledInput";

function Checkout() {
    // pass in props from the shopping cart page, such as item, price, etc.

    const [selected, setSelected] = useState(false);

    const toggle = () => {
        setSelected(!selected);
    };

    const [selected1, setSelected1] = useState(false);

    const toggle1 = () => {
        setSelected1(!selected1);
    };

    return (
        <div>
            <h2> Checkout </h2>
            <div className="container-lg">
                <div className="row">
                    {/* left */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="dropdown-header" onClick={toggle}>
                                <h4 className="dropdown-text">Shipping Information</h4>
                                <span className="dropdown-selection">
                                    {selected ? "-" : "+"}
                                </span>
                            </div>
                            {selected && (
                                <div className="wrapper">
                                    <div className="row">
                                        <LabeledInput
                                            className="col-md-6"
                                            name="firstname"
                                            type="text"
                                            label="First name"
                                            placeholder="Enter first name"
                                        />
                                        <LabeledInput
                                            className="col-md-6"
                                            name="lastname"
                                            type="text"
                                            label="Last name"
                                            placeholder="Enter last name"
                                        />
                                        <LabeledInput
                                            className="col-md-6"
                                            name="phonenumber"
                                            type="text"
                                            label="Phone number"
                                            placeholder="Enter phone number"
                                        />
                                        <LabeledInput
                                            className="col-md-12"
                                            name="address"
                                            type="text"
                                            label="Address"
                                            placeholder="Enter address"
                                        />
                                        <LabeledInput
                                            className="col-md-4"
                                            name="city"
                                            type="text"
                                            label="City"
                                            placeholder="Enter city"
                                        />
                                        <LabeledInput
                                            className="col-md-4"
                                            name="province"
                                            type="text"
                                            label="Province"
                                            placeholder="Enter province"
                                        />
                                        <LabeledInput
                                            className="col-md-4"
                                            name="postal code"
                                            type="text"
                                            label="Postal code"
                                            placeholder="Enter postal code"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="dropdown-header" onClick={toggle1}>
                                <h4 className="dropdown-text">Delivery option</h4>
                                <span className="dropdown-selection">
                                    {selected1 ? "-" : "+"}
                                </span>
                            </div>
                            {selected1 && (
                                <div className="wrapper">
                                    <div className="row">
                                        <LabeledInput
                                            type="radio"
                                            className="col-md-2"
                                            name="delivery"
                                            value="standard-delivery"
                                        />
                                        <div className="col-md-10">
                                            <div className="radio-selection mb-3">
                                                <label className="radio-selection">Standard delivery: Free, received within 2 weeks</label>
                                            </div>
                                        </div>
                                        <LabeledInput
                                            type="radio"
                                            className="col-md-2"
                                            name="delivery"
                                            value="next-day-delivery"
                                        />
                                        <div className="col-md-10">
                                            <div className="radio-selection mb-3">
                                                <label className="radio-selection">Next day delivery: $12.99</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h4>Payment method</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <label>Card holder</label>
                                            <input
                                                type="text"
                                                className="info-input"
                                                name="firstname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <label>Card number</label>
                                            <input
                                                type="text"
                                                className="info-input"
                                                name="firstname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Expiry date</label>
                                            <input
                                                type="text"
                                                className="info-input"
                                                name="firstname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>CVV</label>
                                            <input
                                                type="text"
                                                className="info-input"
                                                name="firstname"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <button type="button" className="btn">
                                                {" "}
                                                Place order{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
