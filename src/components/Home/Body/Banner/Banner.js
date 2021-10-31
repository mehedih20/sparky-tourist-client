import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container className="banner-container">
        <h1>Welcome</h1>
        <h3>
          Sparky <span className="text-success">Tourist</span> Awaits You!
        </h3>
        <p className="lead">Find exciting deals on your travel destination</p>
        <p className="lead ">which you always dreamt off</p>
        <p>Let's dive in!</p>
        <span className="banner-animate">
          <FaArrowDown />
        </span>
      </Container>
    </section>
  );
};

export default Banner;
