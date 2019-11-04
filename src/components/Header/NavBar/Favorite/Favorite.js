import React from "react";
import style from "./Favorite.module.css";
import { Link } from "react-router-dom";

const Favorite = () => (
  <div id={style["favoriteContainer"]}>
    <Link to="/favorite" id={style["favorite"]}>
      FavList
    </Link>
  </div>
);

export { Favorite };
