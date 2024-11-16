import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselEffect.module.css";
import { img } from "./image/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        shawIndicators={false}
        showThumbs={false}
      >
        {img.map((imgItem) => {
          return <img key={imgItem} src={imgItem} />;
        })}
      </Carousel>
      <div className={classes.legend__img}></div>
    </div>
  );
};

export default CarouselEffect;
