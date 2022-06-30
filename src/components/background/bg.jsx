import React from "react";
import style from "./bg.module.css";

export default function Bg({ bg }) {
  return (
    <div className={style.content}>
      <img src={bg}></img>
      <div className={style.effect}></div>
    </div>
  );
}
