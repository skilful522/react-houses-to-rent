import React from "react";
import style from "./NavBar.module.css";
import SearchContainer from "../../../containers/SearchContainer";
import { Favorite } from "./Favorite/Favorite";
import { Home } from "./Home/Home";
const NavBar = () => (
  <div id={style["navBar"]}>
    <Home />
    <SearchContainer />
    <Favorite />
  </div>
);

export { NavBar };
