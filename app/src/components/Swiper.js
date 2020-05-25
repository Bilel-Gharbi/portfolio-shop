import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const FlipEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  const imagesUrl = [
    "url(assets/1.jpg)",
    "url(assets/2.jpg)",
    "url(assets/3.jpg)",
    "url(assets/4.jpg)",
    "url(assets/5.jpg)",
    "url(assets/6.jpg)",
    "url(assets/7.jpg)",
    "url(assets/8.jpg)",
  ];

  return (
    <Swiper {...params}>
      {imagesUrl.map((url, i) => (
        <div
          style={{
            backgroundImage: `${url}`,
            height: "300px",
            width: "300px",
          }}
          key={i}
        />
      ))}
    </Swiper>
  );
};

export default FlipEffect;
