import React from "react";
import "./Checkout.css";
import Navbar from "../Navbar.js";
import { useState } from "react";

function Checkout() { // pass in props from the shopping cart page, such as item, price, etc.

    const [selected, setSelected] = useState(false);

    const toggle = () => {
        setSelected(!selected);
    }

    const [selected1, setSelected1] = useState(false);

    const toggle1 = () => {
        setSelected1(!selected1);
    }

    return (
        <div>
          <Navbar />
            <h2> Checkout </h2>
            <div className="container-lg">
                <div className="row">
                    {/* left */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="dropdown-header" onClick={toggle}>
                                <h4 className="dropdown-text">Shipping Information</h4>
                                <span className="dropdown-selection">{selected ? '-' : '+'}</span>
                            </div>
                            {selected && (<div className="wrapper">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>First name</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Last name</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Phone number</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <label>Address</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>City</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>Province</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>Postal code</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>

                        <div className="card">
                            <div className="dropdown-header" onClick={toggle1}>
                                <h4 className="dropdown-text">Delivery option</h4>
                                <span className="dropdown-selection">{selected1 ? '-' : '+'}</span>
                            </div>
                            {selected1 && (<div className="wrapper">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>First name</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Last name</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Phone number</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <label>Address</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>City</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>Province</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="info-group mb-3">
                                            <label>Postal code</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                </div>
                            </div>)}
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
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <label>Card number</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>Expiry date</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-group mb-3">
                                            <label>CVV</label>
                                            <input type="text" className="info-input" name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="info-group mb-3">
                                            <button type="button" className="btn"> Place order </button>
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