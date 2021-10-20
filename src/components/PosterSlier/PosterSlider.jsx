import React from "react";
import Poster from "../Poster/Poster.component";
import Slider from "react-slick";
import settings from "../../config/poster.carousal.config";
const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={`text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm  ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          Brand new release every friday
        </p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isdark={props.isdark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
