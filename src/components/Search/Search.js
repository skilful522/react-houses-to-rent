import React from "react";
import style from "./Search.module.css";
import uuidv4 from "uuid/v4";

const Search = props => {
  const getSearchInput = event => {
    if (event.keyCode === 13) {
      props.setCurrentPage(1);
      props.setPortionNumber(1);
      props.getSearchInput(event.target.value);
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
    </div>
  );
};

export { Search };
