import React from "react";

const CheckBox = ({ title, name, value, onChange, type, className }) => {
  return (
    <div className={className}>
      {title}
      <input checked={value} onClick={onChange} name={name} type={type} />
    </div>
  );
};

export default CheckBox;
