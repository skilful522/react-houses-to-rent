import React from "react";
import style from "./Header.module.css";
import { NavBar } from "./NavBar/NavBar";

const Header = props => (
  <header id={style["header"]}>
    <h1>Houses To Rent</h1>
    <NavBar setPortionNumber={props.setPortionNumber} />
  </header>
);

export { Header };
