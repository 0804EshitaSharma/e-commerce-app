import React from "react";
import "../Checkout/Checkout.css";
import { useState } from "react";
import LabeledInput from "./LabeledInput";

function DropdownSelection({selected, setSelected, label}) {
    // [selected, setSelected] = useState(false);

    const toggle = () => {
        setSelected(!selected);
        // selected = selected;
    };

    return (
        <div className="dropdown-header" onClick={toggle}>
            <h4 className="dropdown-text">{label}</h4>
            <span className="dropdown-selection">
                {selected ? "-" : "+"}
            </span>
        </div>


    )
}

export default DropdownSelection;
