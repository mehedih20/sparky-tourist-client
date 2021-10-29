import React from "react";
import Banner from "./Body/Banner/Banner";
import Gallery from "./Body/Gallery/Gallery";
import Tours from "./Body/Tours/Tours";
import UserReviews from "./Body/UserReviews/UserReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tours />
      <Gallery />
      <UserReviews />
    </div>
  );
};

export default Home;
