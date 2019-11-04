import React from "react";
import { ImageContainer } from "./ImageContainer/ImageContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { RentContainer } from "./RentContainer/RentContainer";
import style from "./Item.module.css";

const Item = props => (
  <div className={style.flat}>
    <ImageContainer image={props.image} />
    <InfoContainer
      property={props.property}
      title={props.title}
      summary={props.summary}
      id={props.id}
      item={props.item}
      getItem={props.getItem}
    />
    <RentContainer price={props.price} />
  </div>
);

export { Item };
