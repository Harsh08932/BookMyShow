import React from "react";
import HeroCarousal from "../components/hero carousl/hero.corousal";
import Navbar from "../components/Navbar/navbar.component";
const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </>
  );
};
export default DefaultLayout;
