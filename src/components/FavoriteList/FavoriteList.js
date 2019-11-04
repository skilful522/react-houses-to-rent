import React from "react";
import style from "./FavoriteList.module.css";

const FavoriteList = () => (
  <div id={style["favoriteListContainer"]}>
    <h2>Favorite Flats</h2>
    <div id="favoriteList" />
  </div>
);

export { FavoriteList };
