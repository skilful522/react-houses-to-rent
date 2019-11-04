import React from "react";
import style from "./InfoContainer.module.css";
import { Link } from "react-router-dom";

const getItem = props => {
  props.getItem(props.item);
};

const InfoContainer = props => (
  <div className={style.flatInfoContainer}>
    <div className={style.flatTitleContainer}>{props.title}</div>
    <div className={style.flatPropertyContainer}>{props.property}</div>
    <div className={style.flatSummaryContainer}>{props.summary}</div>
    <Link
      to={`/flats/${props.id}`}
      className={style.flatMoreDescription}
      item={props.item}
      onClick={() => getItem(props)}
    >
      Click here for more description
    </Link>
  </div>
);

export { InfoContainer };
