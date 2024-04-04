import React from "react";

const SelectBox = ({ title, value, onChange, name, className }) => {
  const data = [5, 10, 15, 20];
  return (
    <div className={className}>
      {title}
      <select value={value} onChange={onChange} name={name}>
        {data.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
