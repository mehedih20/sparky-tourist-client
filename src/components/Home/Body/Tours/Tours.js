import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <section className="py-5 bg-dark">
      <Container>
        <h1 className="my-5 text-light">Tours</h1>
        <div>
          {tours.map((tour) => {
            const { _id, destination, imgUrl, duration, price } = tour;

            return (
              <div
                key={_id}
                className="text-light m-3 p-3 border border-secondary"
              >
                <div>
                  <img src={imgUrl} alt={destination} />
                </div>
                <h4>{destination}</h4>
                <p>{duration}</p>
                <p>{price}</p>
                <button>Book now</button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Tours;
