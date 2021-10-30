import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleApprove = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
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
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Successfully removed!");
          setToggle(!toggle);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((result) => {
        setAllBooking(result);
        setIsLoading(false);
      });
  }, [toggle]);

  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center mb-5">All Bookings</h1>
        {isLoading ? (
          <Spinner animation="border" className="auth-spinner" variant="info" />
        ) : (
          <div>
            {allBooking.map((booking) => {
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
