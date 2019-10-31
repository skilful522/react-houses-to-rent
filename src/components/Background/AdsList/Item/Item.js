import React from "react";
import { ImageContainer } from "./ImageContainer/ImageContainer";
import { InfoContainer } from "./InfoContainer/InfoContainer";
import { RentContainer } from "./RentContainer/RentContainer";
import style from "./Item.module.css";

const Item = props => {
  return (
    <div className={style.flat}>
      <ImageContainer image={props.image}/>
      <InfoContainer property={props.property} title={props.title} summary={props.summary}/>
      <RentContainer price={props.price}/>
    </div>
  );
};

export { Item };
