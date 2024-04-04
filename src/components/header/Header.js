import React from "react";
import style from "./style.module.css";
import lockIcon from "../../assets/lock.svg";
const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>Password Generator</div>
      <img src={lockIcon} className={style.icon} />
    </div>
  );
};

export default Header;
