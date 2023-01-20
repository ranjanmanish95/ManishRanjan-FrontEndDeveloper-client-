import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import LoginModal from "../Auth/LoginModel";
import SignupModal from "../Auth/SignupModal";

const NewHeader = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);
  //return header on every page
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand
            className="me-5"
            as={Link}
            to="/"
            style={{ fontSize: "32px" }}
          >
            SpaceX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-2">
              <Nav.Link className="ms-2" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} to="/capsules">
                Capsules
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} to="/launches">
                Launch
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} to="/contactus">
                Contact Us
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} to="/data">
                Legacy Data
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} onClick={handleLoginShow}>
                Login
              </Nav.Link>
              <Nav.Link className="ms-2" as={Link} onClick={handleSignupShow}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal handleClose={handleLoginClose} show={showLogin} />
      <SignupModal handleClose={handleSignupClose} show={showSignup} />
    </>
  );
};

export default NewHeader;
