import React from "react";
import style from "./Header.module.css";
import { NavBar } from "./NavBar/NavBar";

const Header = props => {
  return (
    <header id={style["header"]}>
      <h1>Houses To Rent</h1>
      <NavBar
        placeholder="search"
        onSearchChange={props.onSearchChange}
        onChangeLocation={props.onChangeLocation}
        history={props.history}
      />
    </header>
  );
};

export { Header };
