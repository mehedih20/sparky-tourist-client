import React from "react";
import Banner from "./Body/Banner/Banner";
import Gallery from "./Body/Gallery/Gallery";
import Tours from "./Body/Tours/Tours";
import Why from "./Body/Why/Why";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tours />
      <Why />
      <Gallery />
    </div>
  );
};

export default Home;
