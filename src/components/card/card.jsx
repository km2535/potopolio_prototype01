import React from "react";
import style from "./card.module.css";
import { useSwiperSlide } from "swiper/react";

function Card({ card, title, background }) {
  const swiperSlide = useSwiperSlide();
  console.log(swiperSlide.isActive);
  swiperSlide.isActive && background(card.url);
  swiperSlide.isActive && title(card.title);
  return (
    <>
      <div className={style.container}>
        <a href="#">
          <img src={card.bg} className={style.image} alt=""></img>
        </a>
      </div>
    </>
  );
}
export default Card;
