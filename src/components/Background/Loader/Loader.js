import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div id={style["loaderContainer"]}>
      <div id={style["loader"]} />
    </div>
  );
};

export { Loader };
