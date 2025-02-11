import React from "react";
import "./portfolio.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFlip } from "swiper/modules";
const Portfolio = () => {
  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Few of my work</span>

      <Swiper
        // effect={"flip"}
        className="portfolio__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, EffectFlip]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="portfolio__card" key={id}>
              <img src={image} alt="" className="portfolio__img" />
              <h3 className="portfolio__name">{title}</h3>
              <p className="portfolio__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
