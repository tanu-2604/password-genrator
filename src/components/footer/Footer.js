import React from "react";
import style from "./style.module.css";
import copypaste from "../../assets/copypaste.png";
const Footer = ({ password }) => {
  const handleClipboard = () => {
    navigator.clipboard.writeText(password);
  };
  return (
    <div className={style.root} onClick={handleClipboard}>
      <div>{password}</div>
      <img className={style.icon} src={copypaste} alt="copy" />
    </div>
  );
};

export default Footer;
