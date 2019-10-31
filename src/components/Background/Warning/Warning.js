import React from "react";
import style from "./Warning.module.css";

const Warning = () => {
  return (
    <div id={style['warningContainer']}>
      Sorry, this location doesn't exist.
      <br />
      Try again
    </div>
  );
};

export { Warning };
