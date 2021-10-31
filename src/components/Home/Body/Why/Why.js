import React from "react";
import { Container } from "react-bootstrap";
import { FaUserSecret, FaHandshake, FaRegSmileWink } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import "./Why.css";

const data = [
  {
    name: "2000+ Worldwide Guides",
    icon: <FaUserSecret />,
  },
  {
    name: "100% trusted travel agency",
    icon: <FaHandshake />,
  },
  {
    name: "10+ year of travel experience",
    icon: <MdVerifiedUser />,
  },
  {
    name: "95% of our traveller happy",
    icon: <FaRegSmileWink />,
  },
];

const Why = () => {
  return (
    <section className="why">
      <h2 className="title">Why Us?</h2>
      <Container className="why-container px-3">
        {data.map((item, index) => {
          const { name, icon } = item;
          return (
            <div className="why-box" key={index}>
              <span className="why-icon">{icon}</span>
              <p>{name}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Why;
