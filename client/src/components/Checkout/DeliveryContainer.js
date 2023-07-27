import React from "react";
import "./Checkout.css";
import { useState, useEffect, useRef } from "react";
import LabeledInput from "../Custom/LabeledInput";
import DropdownSelection from "../Custom/DropdownSelection";
import usePlacesAutocomplete from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


function DeliveryContainer({ handleOrderSubmit, orderData, setOrderData }) {
    const [shippingSelected, setshippingSelected] = useState(true);
    const [deliverySelected, setdeliverySelected] = useState(false);
    const [addressComponents, setAddressComponents] = useState({
        city: "",
        zipcode: "",
        province: "",
        country: "",
    });
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
    } = usePlacesAutocomplete({ callbackName: "initMap" });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "firstname") {
            setFirstName(value);
        } else if (name === "lastname") {
            setLastName(value);
        } else if (name === "phonenumber") {
            setPhoneNumber(value);
        }
    };

    const handleSelect = (address) => {
        setValue(address, false);
    };

    const extractAddressComponents = (address) => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === "OK") {
                const components = results[0].address_components;
                let city = "";
                let zipcode = "";
                let country = "";
                let province = "";
                for (let i = 0; i < components.length; i++) {
                    const component = components[i];
                    const types = component.types;
                    if (types.includes("locality")) {
                        city = component.long_name;
                    }
                    if (types.includes("postal_code")) {
                        zipcode = component.long_name;
                    }
                    if (types.includes("country")) {
                        country = component.long_name;
                    }
                    if (types.includes("administrative_area_level_1")) {
                        province = component.long_name;
                    }
                }
                setAddressComponents({ city, zipcode, province, country });
            }
        });
    };

    useEffect(() => {
        if (value) {
            extractAddressComponents(value);
        }
    }, [value]);

    const renderSuggestions = () => {
        const suggestions = data.map(({ place_id, description }) => (
            <ComboboxOption key={place_id} value={description} />
        ));
        return <>{suggestions}</>;
    };

    const handleNextStepShipping = (e) => {
        e.preventDefault();

        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            phoneNumber.trim() === ""
        ) {
            return;
        }

        setshippingSelected(false);
        setdeliverySelected(true);
    };

    const handleRadioChange = (e) => {
        setSelectedDeliveryOption(e.target.value);
    };

    const handleNextStepDelivery = (e) => {
        e.preventDefault();
        console.log("selectedDeliveryOption:", selectedDeliveryOption);
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("phoneNumber:", phoneNumber);

        if (selectedDeliveryOption) {
            setOrderData({
                ...orderData,
                deliveryOption: selectedDeliveryOption,
            });
            console.log("delivery button orderdata:", orderData);

        } else {
            console.log("No delivery option selected.");
        }
    };

    return (
        <div className="col-md-8">
            <div className="card">
                <DropdownSelection
                    label="Shipping Information"
                    selected={shippingSelected}
                    setSelected={setshippingSelected}
                />
                {shippingSelected && (
                    <div className="wrapper">
                        <div className="row">
                            <LabeledInput
                                className="col-md-6"
                                name="firstname"
                                type="text"
                                label="First name"
                                placeholder="Enter first name"
                                required={true}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <LabeledInput
                                className="col-md-6"
                                name="lastname"
                                type="text"
                                label="Last name"
                                placeholder="Enter last name"
                                required={true}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <LabeledInput
                                className="col-md-6"
                                name="phonenumber"
                                type="text"
                                label="Phone number"
                                placeholder="Enter phone number"
                                required={true}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <Combobox className="col-md-12" onSelect={handleSelect}>
                                <label>Address</label>
                                <ComboboxInput
                                    name="address"
                                    type="text"
                                    value={value}
                                    onChange={handleInput}
                                    disabled={!ready}
                                    placeholder="Enter address"
                                    required
                                />
                                <ComboboxPopover>
                                    <ComboboxList>
                                        {status === "OK" && renderSuggestions()}
                                    </ComboboxList>
                                </ComboboxPopover>
                            </Combobox>
                            <LabeledInput
                                className="col-md-4"
                                name="city"
                                type="text"
                                label="City"
                                value={addressComponents.city}
                                placeholder="Enter city"
                            />
                            <LabeledInput
                                className="col-md-4"
                                name="province"
                                type="text"
                                value={addressComponents.province}
                                label="Province"
                                placeholder="Enter province"
                            />
                            <LabeledInput
                                className="col-md-4"
                                name="postal code"
                                type="text"
                                value={addressComponents.zipcode}
                                label="Postal code"
                                placeholder="Enter postal code"
                            />
                            <LabeledInput
                                className="col-md-4"
                                name="country"
                                type="text"
                                value={addressComponents.country}
                                label="Country"
                                placeholder="Enter country"
                            />
                            <p className="col-md-12" />
                            <div className="col-md-3" id="nextStep">
                                <div className="info-group mb-3">
                                    <button
                                        className="btn"
                                        type="submit"
                                        onClick={handleNextStepShipping}
                                    >
                                        Next step
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="card">
                <DropdownSelection
                    label="Delivery option"
                    selected={deliverySelected}
                    setSelected={setdeliverySelected}
                />
                {deliverySelected && (
                    <div className="wrapper">
                        <div className="row">
                            <input
                                className="col-md-2"
                                type="radio"
                                name="delivery"
                                value="standard"
                                onChange={handleRadioChange}
                            />
                            <div className="col-md-10">
                                <div className="radio-selection mb-3">
                                    <label className="radio-selection">
                                        Standard delivery: Free, received within 2 weeks
                                    </label>
                                </div>
                            </div>
                            <input
                                className="col-md-2"
                                type="radio"
                                name="delivery"
                                value="nextDay"
                                onChange={handleRadioChange}
                            />
                            <div className="col-md-10">
                                <div className="radio-selection mb-3">
                                    <label className="radio-selection">
                                        Next day delivery: $12.99
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3" id="nextStep">
                                <div className="info-group mb-3">
                                    <form onSubmit={handleNextStepDelivery}>
                                        <button
                                            className="btn"
                                            type="submit"
                                            disabled={!selectedDeliveryOption}
                                        >
                                            Next step
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default DeliveryContainer;
