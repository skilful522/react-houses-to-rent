import React from "react";
import style from "./RentContainer.module.css";

const RentContainer = ({ price }) => {
  return (
    <div className={style.rentContainer}>
      <div className={style.flatPriceContainer}>{price}</div>
      <button className={style.favoritesButton} onClick={handleAddFavorite}>
        ☆Favorite☆
      </button>
    </div>
  );
};

export { RentContainer };
