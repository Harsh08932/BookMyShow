import React from "react";
import EntertainmentSlider from "../components/entertainment/entertainmentCard";
//import Premier from "../components/Premier/Premier.component";
import Slider from "react-slick";
import TempPoster from "../config/TempPoster.config";
import PosterSlider from "../components/PosterSlier/PosterSlider";
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl  font-bold text-grey-800 my-8">
            The best of entertainment
          </h1>
          <EntertainmentSlider />
        </div>
        <div className="bg-gray-800 py-16 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className=" hidden  md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premier"
                className=" w-full
            h-full"
              />
            </div>
            <div>
              {
                <PosterSlider
                  images={TempPoster}
                  title="Priemers"
                  subtitle="Brand new release very friday"
                />
              }
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={TempPoster}
            title="Online streaming events"
            subtitle="Brand new release very friday"
            isDark={false}
          />
        </div>

        <div className="container mx-auto px-4 my-8">
          <PosterSlider
            images={TempPoster}
            title="Outdoor Events"
            subtitle="Brand new release very friday"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
