import React from "react";
import Card from "./components/card/card.jsx";
import { initial } from "./service/datas";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper";
import style from "./app.module.css";
import "swiper/css/navigation";
import "swiper/css";
import Header from "./components/header/header";
import Bg from "./components/background/bg";

export default function App() {
  const [cards] = useState(initial);
  const [title, setTitle] = useState();
  const [background, setBg] = useState();

  return (
    <>
      <Header title={title} />
      <Bg bg={background} />

      <Swiper
        modules={[Navigation, EffectCreative]}
        slidesPerView={1}
        navigation
        effect={"creative"}
        speed={1000}
        creativeEffect={{
          prev: {
            origin: "center bottom",
            translate: [-500, 400, 0],
            rotate: [0, 0, -90],
          },
          next: {
            origin: "center bottom",
            translate: [500, 400, 0],
            rotate: [0, 0, 90],
          },
        }}
      >
        <div className={style.container}>
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card.data} background={setBg} title={setTitle} />
              {/* {({ isActive }) => (
                <Card
                  card={card.data}
                  active={isActive}
                  background={setBg}
                  title={setTitle}
                />
              )} */}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
