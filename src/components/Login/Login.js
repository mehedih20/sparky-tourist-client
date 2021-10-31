import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../../Context/authContext";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const { googleSignIn, setUser } = useAuth();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className="text-center py-3 d-flex justify-content-center">
      <div className="login-container">
        <h2>
          Sparky <span className="text-success">Tourist</span>
        </h2>
        <p className="lead text-muted mb-5">
          Make your travel dreams come true!
        </p>
        <Button
          className="login-btn"
          variant="outline-success"
          onClick={handleSignIn}
        >
          <FcGoogle /> Google Login
        </Button>
      </div>
    </Container>
  );
};

export default Login;
