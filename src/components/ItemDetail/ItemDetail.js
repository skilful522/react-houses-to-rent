import React from "react";
import style from "./ItemDetail.module.css";
import { ImageContainer } from "../AdsList/Item/ImageContainer/ImageContainer";
import RentContainer from "../../containers/RentContainer";

const ItemDetail = props => (
  <div id={style["item"]}>
    <ImageContainer image={props.item.image} />
    <div className={style.flatInfoContainer}>
      <div className={style.flatTitleContainer}>{props.item.title}</div>
      <div className={style.flatPropertyContainer}>{props.item.property}</div>
      <div className={style.flatSummaryContainer}>{props.item.summary}</div>
    </div>
    <RentContainer price={props.item.price} item={props.item} />
  </div>
);

export { ItemDetail };
