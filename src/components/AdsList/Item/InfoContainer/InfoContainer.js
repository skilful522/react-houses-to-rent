import React from "react";
import style from "./InfoContainer.module.css";

const InfoContainer = ({ title, property, summary }) => (
  <div className={style.flatInfoContainer}>
    <div className={style.flatTitleContainer}>{title}</div>
    <div className={style.flatPropertyContainer}>{property}</div>
    <div className={style.flatSummaryContainer}>{summary}</div>
    <div className={style.flatMoreDescription}>
      Click here for more description
    </div>
  </div>
);

export { InfoContainer };
