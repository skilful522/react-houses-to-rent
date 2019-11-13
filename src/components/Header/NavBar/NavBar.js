import React from "react";
import style from "./NavBar.module.css";
import SearchContainer from "../../../containers/SearchContainer";
import { Favorite } from "./Favorite/Favorite";
import { Home } from "./Home/Home";
const NavBar = props => (
  <div id={style["navBar"]}>
    <Home />
    <SearchContainer setPortionNumber={props.setPortionNumber} />
    <Favorite />
  </div>
);

export { NavBar };
