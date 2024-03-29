import React from "react";
import style from "./ImageContainer.module.css";

const ImageContainer = ({ image }) => (
  <div className={style.flatImageContainer}>
    <img className="flatImage" src={image} />
  </div>
);

export { ImageContainer };
