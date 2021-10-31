import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const AddTour = () => {
  const [destination, setDestination] = useState("");
  const [tourPrice, setTourPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tourDuration, setTourDuration] = useState("");
  const [accomodation, setAccomodation] = useState("");
  const [guide, setGuide] = useState("");
  const history = useHistory();

  const reset = () => {
    setDestination("");
    setTourPrice("");
    setImgUrl("");
    setTourDuration("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const price = parseFloat(tourPrice);
    const duration = parseFloat(tourDuration);
    const tour = {
      destination,
      imgUrl,
      price,
      duration,
      accomodation,
      guide,
    };
    fetch("https://sheltered-bayou-10769.herokuapp.com/tours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tour),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Tour added!");
          reset();
          history.push("/");
        }
      });
  };

  return (
    <Container className="my-5">
      <h1 className="title text-secondary">Add Tour</h1>
      <Form className="w-75 mx-auto" onSubmit={handleAdd}>
        <Form.Group className="mb-3" controlId="formGroupDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            value={destination}
            placeholder="Enter destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            value={tourPrice}
            placeholder="Enter Price"
            onChange={(e) => setTourPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="text"
            value={tourDuration}
            placeholder="Enter Duration"
            onChange={(e) => setTourDuration(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupImgUrl">
          <Form.Label>ImgUrl</Form.Label>
          <Form.Control
            type="text"
            value={imgUrl}
            placeholder="Enter ImgUrl"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAccomodation">
          <Form.Label>Accomodation</Form.Label>
          <Form.Control
            type="text"
            value={accomodation}
            placeholder="Enter Accomodation details"
            onChange={(e) => setAccomodation(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-5" controlId="formGroupImgUrl">
          <Form.Label>Guide</Form.Label>
          <Form.Control
            type="text"
            value={guide}
            placeholder="Enter guide availability"
            onChange={(e) => setGuide(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Tour
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

export default AddTour;
