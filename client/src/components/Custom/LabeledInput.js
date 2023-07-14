import React from "react";

function LabeledInput({ className, name, label, type, placeholder, value, required, onChange }) {

    return (
        <div className={className}>
            <div className="info-group mb-3">
                <label>{label}</label>
                <input
                    name={name}
                    type={type}
                    className="info-input"
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default LabeledInput;