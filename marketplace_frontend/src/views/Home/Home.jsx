import React from "react";
import style from "./Home.module.css";
import { Recommended } from "../../components/Recommended/Recommended";
import { Inspo } from "../../components/Inspo/Inspo";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
    <React.Fragment>
      <div className={style.Home}>
        <div className={style.Hero}></div>
        <div className={style.Recommended}>
          <Recommended />
        </div>
        <div className={style.Inspo}>
          <Inspo />
        </div>
      </div>
    </React.Fragment>
  );
};
