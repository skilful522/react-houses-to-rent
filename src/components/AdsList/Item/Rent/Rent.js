import React from "react";
import style from "./Rent.module.css";

const Rent = props => {
  const handleSetFavFlat = () => {
    props.item.isAdded = true;
    props.updateFlats(props.flats);
    props.setFlat(props.item);
  };
  return (
    <div className={style.rentContainer}>
      <div className={style.flatPriceContainer}>{props.price}</div>
      {props.item.isAdded ? (
        <button
          className={style.activeFavoritesButton}
          onClick={handleSetFavFlat}
        >
          ☆Added☆
        </button>
      ) : (
        <button className={style.favoritesButton} onClick={handleSetFavFlat}>
          ☆Favorite☆
        </button>
      )}
    </div>
  );
};

export { Rent };
