import React from "react";
import style from "./Header.module.css";
import { Search } from "../Search/Search";

const Header = props => {
  return (
    <header id={style["header"]}>
      <h1>Houses To Rent</h1>
      <Search placeholder="search" onSearchChange={props.onSearchChange} />
    </header>
  );
};

export { Header };
