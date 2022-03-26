import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import img from "../img/kiwi.png";
import Study from "./components/Home/Study";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetch("/authorize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then(data => data.json())
        .then(({ success, msg, token }) => {
          if (success) {
            window.localStorage.setItem("token", token);
          } else {
            window.localStorage.removeItem("token");
            console.error(msg);
            navigate("/login");
          }
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
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
                active={window.location.pathname === "/study"}
                onClick={() => {
                  setToggle(false);
                }}
              >
                자율학습
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="question"
                active={window.location.pathname === "/question"}
                onClick={() => {
                  setToggle(false);
                }}
              >
                질문방
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="zoom"
                active={window.location.pathname === "/zoom"}
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
      <Container>
        <Routes>
          <Route path="/" element={<h1>홈화면</h1>} />
          <Route path="/study" element={<Study />} />
          <Route path="/question" element={<h1>질문방</h1>} />
          <Route path="/zoom" element={<h1>화상수업</h1>} />
          <Route path="/*" element={<h1>없는 페이지</h1>} />
        </Routes>
      </Container>
    </>
  );
}
