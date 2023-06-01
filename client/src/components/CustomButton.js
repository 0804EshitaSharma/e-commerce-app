import React from 'react'

function CustomButton({label, type}) {
  return (
    <div>
      <button className="custom_button" type={type}>
        {label}
      </button>
    </div>
  );
}

export default CustomButton