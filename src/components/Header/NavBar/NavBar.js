import React from "react";
import style from "./NavBar.module.css";
import { Search } from "../../Search/Search";
import { Favorite } from "./Favorite/Favorite";
import { Home } from "./Home/Home";

const NavBar = props => (
  <div id={style["navBar"]}>
    <Home />
    <Search
      placeholder="search"
      onSearchChange={props.onSearchChange}
      onChangeLocation={props.onChangeLocation}
      history={props.history}
    />
    <Favorite />
  </div>
);

export { NavBar };
