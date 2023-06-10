import React from "react";

function LabeledInput({ className, name, label, type, placeholder }) {
    return (
        <div className={className}>
            <div className="info-group mb-3">
                <label>{label}</label>
                <input
                    name={name}
                    type={type}
                    className="info-input"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default LabeledInput;