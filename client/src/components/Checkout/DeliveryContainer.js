import React from "react";
import "./Checkout.css";
import { useState, useEffect } from "react";
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


function DeliveryContainer() {
    const [shippingSelected, setshippingSelected] = useState(true);
    const [deliverySelected, setdeliverySelected] = useState(false);
    const [addressComponents, setAddressComponents] = useState({
        city: "",
        zipcode: "",
        province: "",
        country: ""
    });

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue
    } = usePlacesAutocomplete({ callbackName: "initMap" });

    const handleInput = (e) => {
        setValue(e.target.value);
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
        return (
            <>
                {suggestions}
            </>
        );
    }

    const handleNextStep = () => {
        setshippingSelected(false);
        setdeliverySelected(true);
    };

    return (
        <div className="col-md-8">
            <div className="card">
                <DropdownSelection label="Shipping Information" selected={shippingSelected} setSelected={setshippingSelected} />
                {shippingSelected && (
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
                            <Combobox className="col-md-12" onSelect={handleSelect}>
                                <label>Address</label>
                                <ComboboxInput
                                    name="address"
                                    type="text"
                                    value={value}
                                    onChange={handleInput}
                                    disabled={!ready}
                                    placeholder="Enter address"
                                />
                                <ComboboxPopover>
                                    <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
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
                                    <button className="btn" onClick={handleNextStep}>
                                        {" "}
                                        Next step{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="card">
                <DropdownSelection label="Delivery option" selected={deliverySelected} setSelected={setdeliverySelected}/>
                {deliverySelected && (
                    <div className="wrapper">
                        <div className="row">
                            <LabeledInput
                                type="radio"
                                className="col-md-2"
                                name="delivery"
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

    )
}

export default DeliveryContainer;