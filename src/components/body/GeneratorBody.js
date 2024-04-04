import React, { useState } from "react";
import SelectBox from "../../common/SelectBox";
import CheckBox from "../../common/CheckBox";
import style from "./style.module.css";
import { generatePassword } from "../../lib/password";

const GeneratorBody = ({ onSubmit }) => {
  const [config, setConfig] = useState({
    size: 5,
    uppercase: false,
    numbers: false,
    specials: false,
  });
  console.log("🚀 ~ GeneratorBody ~ config:", config);

  const handleInputChange = (e) => {
    console.log("🚀 ~ GeneratorBody ~ config:", config);

    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setConfig({ ...config, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedPassword = generatePassword(config);

    onSubmit(generatedPassword); // Pass the generated password to the onSubmit function
  };
  return (
    <form className={style.root}>
      <div className={style.grid_container}>
        <SelectBox
          value={config.size}
          onChange={handleInputChange}
          name="size"
          title="Size"
          className={style.grid_item}
        />
        <CheckBox
          title="UpperCase"
          name="uppercase"
          type="checkbox"
          value={config.uppercase}
          onChange={handleInputChange}
          className={style.grid_item}
        />
        <CheckBox
          name="numbers"
          title="Numbers"
          type="checkbox"
          value={config.numbers}
          onChange={handleInputChange}
          className={style.grid_item}
        />
        <CheckBox
          value={config.specials}
          onChange={handleInputChange}
          name="specials"
          title="Specials"
          type="checkbox"
          className={style.grid_item}
        />
      </div>
      <div className={style.btn_container}>
        <button
          type="button"
          onClick={handleSubmit}
          className={style.btn_genrate}
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default GeneratorBody;
