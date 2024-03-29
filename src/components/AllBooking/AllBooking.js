import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleApprove = (id) => {
    fetch(`https://sparky-tourist-server.vercel.app/bookings/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Successfully approved!");
          setToggle(!toggle);
        }
      });
  };

  const handleDelete = (id) => {
    const makeSure = window.confirm("Are you sure you want to delete");
    if (makeSure) {
      fetch(`https://sparky-tourist-server.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setToggle(!toggle);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://sparky-tourist-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((result) => {
        setAllBooking(result);
        setIsLoading(false);
      });
  }, [toggle]);

  return (
    <div>
      <Container className="my-5">
        <h1 className="title text-secondary">All Bookings</h1>
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
            {allBooking.length === 0 && (
              <p className="text-center lead text-muted">
                There are no bookings yet!
              </p>
            )}
            {allBooking.map((booking) => {
              const { _id, name, email, destination, img, status, address } =
                booking;
              return (
                <div key={_id} className="booking shadow">
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
                    <Button
                      variant="success"
                      className={status === "approved" && "disabled"}
                      onClick={() => handleApprove(_id)}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="danger"
                      className="ms-3"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </Button>
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

export default AllBooking;
