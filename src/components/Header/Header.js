import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../../Context/authContext";
import "./Header.css";

const Header = () => {
  const { user, auth, setUser } = useAuth();

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Navbar variant="light" expand="lg" bg="light">
      <Container className="py-2">
        <Navbar.Brand className="sparky-brand" as={Link} to="/">
          Sparky <span className="text-success">Tourist</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto sparky-nav">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {user.displayName && (
              <Nav.Link as={Link} to="/myBooking">
                My Booking
              </Nav.Link>
            )}
            {user.displayName && (
              <Nav.Link as={Link} to="/allBooking">
                All Booking
              </Nav.Link>
            )}
            {user.displayName && (
              <Nav.Link as={Link} to="/addTour">
                Add Tour
              </Nav.Link>
            )}

            {user.displayName ? (
              <Button variant="danger" onClick={googleSignOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
