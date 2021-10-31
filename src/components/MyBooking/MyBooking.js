import React, { useEffect, useState } from "react";
import { Container, Button, Spinner, Row, Col } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const url = `https://sheltered-bayou-10769.herokuapp.com/bookings/${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setMyBooking(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center mb-5">My Booking</h1>
        {isLoading ? (
          <div className="spinner-container">
            <Spinner
              animation="border"
              className="tour-spinner"
              variant="info"
            />
          </div>
        ) : (
          <div>
            {myBooking.map((booking) => {
              const { _id, name, email, destination, img, status, address } =
                booking;
              return (
                <div key={_id} className="booking">
                  <div className="booking-img">
                    <img src={img} className="img-fluid" alt={destination} />
                  </div>
                  <div className="booking-body">
                    <h4>{destination}</h4>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{address}</p>
                    <p
                      className={
                        status === "pending" ? "text-danger" : "text-success"
                      }
                    >
                      <span className="text-dark">Status</span>: {status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default MyBooking;
