import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { useAuth } from "../../Context/authContext";

const AddBooking = () => {
  const { user } = useAuth();
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [tour, setTour] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const reset = () => {
    setNumber("");
    setAddress("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: user.email,
      name: user.displayName,
      number,
      address,
      img: tour.imgUrl,
      destination: tour.destination,
      price: tour.price,
      status: "pending",
    };
    fetch("https://sheltered-bayou-10769.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Booking added!");
          reset();
          history.push("/myBooking");
        }
      });
  };

  useEffect(() => {
    fetch(`https://sheltered-bayou-10769.herokuapp.com/tours/${id}`)
      .then((res) => res.json())
      .then((result) => setTour(result));
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center">Add Booking</h1>
      <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control disabled type="email" value={user.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            disabled
            type="text"
            value={user.displayName}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupNumber">
          <Form.Label>Your number</Form.Label>
          <Form.Control
            required
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAddress">
          <Form.Label>Your Home Address</Form.Label>
          <Form.Control
            required
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
          />
        </Form.Group>
        {tour.destination && (
          <Form.Group className="mb-3" controlId="formGroupTour">
            <Form.Label>Your Tour</Form.Label>
            <Form.Control type="text" value={tour.destination} disabled />
          </Form.Group>
        )}
        {tour.price && (
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control type="number" value={tour.price} disabled />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Add Booking
        </Button>
        <Button
          variant="success"
          className="ms-3"
          onClick={() => history.push("/")}
        >
          Back Home
        </Button>
      </Form>
    </Container>
  );
};

export default AddBooking;
