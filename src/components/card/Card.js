import React, { useState } from "react";
import Header from "../header/Header";
import GeneratorBody from "../body/GeneratorBody";
import Footer from "../footer/Footer";
import style from "./style.module.css";

const Card = () => {
  const [password, setPassword] = useState("Amazing Password");
  return (
    <div className={style.root}>
      <div className={style.main}>
        <Header />
        <GeneratorBody onSubmit={setPassword} />
      </div>
      <Footer password={password} />
    </div>
  );
};

export default Card;
