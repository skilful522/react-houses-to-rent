import React from "react";
import style from "./Search.module.css";
import { FavoriteListButton } from "../Header/FavoriteListButton/FavoriteListButton";
import uuidv4 from "uuid/v4";

const Search = props => {
  const getSearchInput = event => {
    if (event.keyCode === 13) {
      props.onSearchChange(event.target.value);
    }
  };
  return (
    <div id={style["searchContainer"]}>
      <input
        id={style["searchInput"]}
        placeholder={props.placeholder}
        key={uuidv4()}
        onKeyDown={getSearchInput}
      />
      <FavoriteListButton />
    </div>
  );
};

export { Search };
