import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

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
    <section className="py-5 bg-dark">
      <Container>
        <h1 className="my-5 text-light">Tours</h1>
        <div style={{ position: "relative" }} className="pb-5">
          {isLoading ? (
            <Spinner
              animation="border"
              style={{ position: "absolute", left: "50%", top: "50%" }}
              variant="info"
            />
          ) : (
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
                    <button onClick={() => handleBook(_id)}>Book now</button>
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
