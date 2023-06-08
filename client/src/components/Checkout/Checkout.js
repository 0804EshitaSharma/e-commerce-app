import React from "react";
import './Checkout.css';
import Navbar from "../Navbar.js";

function Checkout() { // pass in props from the shopping cart page, such as item, price, etc.
    return (
        <div>
          <Navbar />
            <h2> Checkout </h2>
          {/* <div className="py-4"> */}
            <div className="container">
                <div className="row">
                    {/* left */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4>Shipping Information</h4>
                            </div>
                            <div className="card-body">
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
                            </div>
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
          {/* </div> */}
        </div>
      );
}

export default Checkout;