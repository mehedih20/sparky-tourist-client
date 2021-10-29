import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../../Context/authContext";

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
    <Navbar bg="light" variant="light" expand="lg">
      <Container className="py-3">
        <Navbar.Brand as={Link} to="/">
          Sparky Tours
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
              <Button variant="danger" className="ms-3" onClick={googleSignOut}>
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
