import React from "react";
import style from "./FavoriteList.module.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";

const FavoriteList = ({ favoriteFlats }) => {
  return (
    <div id={style["favoriteListContainer"]}>
      <h2>Favorite Flats</h2>
      <div id="favoriteList">
        {favoriteFlats.map(item => (
          <div id={style["wrapper-remove"]} key={item.key}>
            <ItemDetail item={item} key={item.key} />
            <div id="wrapper-remover">
              <button id={style["remover"]}>✖</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FavoriteList };
