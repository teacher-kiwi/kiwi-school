import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../../img/kiwi.png";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => {
            setToggle(false);
          }}
        >
          <img
            alt=""
            src={img}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          키위스쿨
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setToggle(p => !p)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" in={toggle}>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="study"
              active={/^\/study*/.test(window.location.pathname)}
              onClick={() => {
                setToggle(false);
              }}
            >
              자율학습
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="question"
              active={/^\/question*/.test(window.location.pathname)}
              onClick={() => {
                setToggle(false);
              }}
            >
              질문방
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="zoom"
              active={/^\/zoom*/.test(window.location.pathname)}
              onClick={() => {
                setToggle(false);
              }}
            >
              화상수업
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
