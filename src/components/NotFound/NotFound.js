import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <h2 className="display-1">Opps!</h2>
      <p className="lead mb-5">The page your requested is not available</p>
      <Link to="/" className="btn btn-success">
        Back Home
      </Link>
    </Container>
  );
};

export default NotFound;
