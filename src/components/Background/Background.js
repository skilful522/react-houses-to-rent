import React from "react";
import style from "./Background.module.css";
import { AdsList } from "./AdsList/AdsList";

const Background = (props) => {
  return (
    <div id={style.background}>
      <AdsList getFlats={props.getFlats} flats={props.flats} searchInput={props.searchInput}/>
    </div>
  );
};

export { Background };
