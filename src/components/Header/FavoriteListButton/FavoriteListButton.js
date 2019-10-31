import React from "react";
import style from "./FavoriteListButton.module.css";

const FavoriteListButton = () => {
  return (
    <div id={style["favoriteListsButtonContainer"]}>
      <button id={style["favoriteListButton"]}>FavList</button>
    </div>
  );
};

export { FavoriteListButton };
