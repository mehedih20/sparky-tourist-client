import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { AiFillFire } from "react-icons/ai";
import { useHistory } from "react-router";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const handleBook = (id) => {
    history.push(`/addBooking/${id}`);
  };

  useEffect(() => {
    fetch("https://sheltered-bayou-10769.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="my-5 text-dark">Tours</h1>
        <div className="pb-5">
          {isLoading ? (
            <div className="spinner-container">
              <Spinner
                animation="border"
                className="tour-spinner"
                variant="info"
              />
            </div>
          ) : (
            <div className="tours-container">
              {tours.map((tour) => {
                const { _id, destination, imgUrl, duration, price } = tour;

                return (
                  <div key={_id} className="text-muted tour">
                    <div className="tour-img">
                      <img src={imgUrl} alt={destination} />
                      <h4 className="tour-title">{destination}</h4>
                    </div>
                    <div className="p-3 text-center">
                      <p className="fs-5">Duration: {duration} days</p>
                      <p className="fs-3" style={{ color: "#864879" }}>
                        {" "}
                        {price}$
                      </p>
                    </div>
                    <button
                      className="tour-btn"
                      onClick={() => handleBook(_id)}
                    >
                      Book now <AiFillFire className="tour-btn-svg" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Tours;
