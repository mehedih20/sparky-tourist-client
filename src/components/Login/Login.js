import React from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "../../Context/authContext";

const Login = () => {
  const { user, googleSignIn, setUser } = useAuth();
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
    <Container className="text-center py-3">
      <h1>Login</h1>
      {user.displayName && <p>{user.displayName}</p>}

      <br />
      <button onClick={handleSignIn}>Google Login</button>
    </Container>
  );
};

export default Login;
