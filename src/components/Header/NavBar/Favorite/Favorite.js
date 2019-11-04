import React from "react";
import style from "./Favorite.module.css";
import { A } from "hookrouter";

const Favorite = () => (
  <div id={style["favoriteContainer"]}>
    <A href={"/favorite"} id={style["favorite"]}>
      FavList
    </A>
  </div>
);

export { Favorite };
