import React from "react";
import style from "./Home.module.css";
import { Recommended } from "../../components/Recommended/Recommended";
import { Inspo } from "../../components/Inspo/Inspo";
import { Hero } from '../../components/Hero/Hero'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <>
    <Link to='/filter'>Filter</Link>
      <div className={style.Home}>
        <div className={style.Hero}>
          <Hero/>
        </div>
        <div className={style.Recommended}>
          <Recommended />
        </div>
        <div className={style.Inspo}>
          <Inspo />
        </div>
      </div>
    </>
  );
};
