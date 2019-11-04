import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div id={style["homeContainer"]}>
    <Link to="/" id={style["home"]}>
      Home
    </Link>
  </div>
);

export { Home };
