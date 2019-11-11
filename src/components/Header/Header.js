import React from "react";
import style from "./Header.module.css";
import { NavBar } from "./NavBar/NavBar";

const Header = () => {
  return (
    <header id={style["header"]}>
      <h1>Houses To Rent</h1>
      <NavBar/>
    </header>
  );
};

export { Header };
