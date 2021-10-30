import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const url = `http://localhost:5000/bookings/${user.email}`;

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
          <Spinner animation="border" className="auth-spinner" variant="info" />
        ) : (
          <div>
            {myBooking.map((booking) => {
              const { _id, name, email, destination, img, status, address } =
                booking;
              return (
                <div key={_id} className="d-flex p-2 border rounded shadow m-3">
                  <div>
                    <img src={img} className="img-fluid" alt={destination} />
                  </div>
                  <div className="ms-3">
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
