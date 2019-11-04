import React from "react";
import style from "./Home.module.css";
import { A } from "hookrouter";

const Home = () => (
  <div id={style["homeContainer"]}>
    <A href={"/"} id={style["home"]}>
      Home
    </A>
  </div>
);

export { Home };
