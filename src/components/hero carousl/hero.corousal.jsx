import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows.component";
const HeroCarousal = () => {
  const settingsLg = {
    arrow: true,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images = [
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://unsplash.com/photos/5ldp-6U8fak",
    "https://unsplash.com/photos/r9IshKdzXN0",
    "https://unsplash.com/photos/bL36_U2BKdE",
  ];
  return (
    <>
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-44 md:h-72 py-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-80 px-2 py-3 rounded-md">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default HeroCarousal;
