import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeRouter from "./components/Home/HomeRouter";
import NavBar from "./components/Home/NavBar";

export default function Home() {
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
      <NavBar />
      <Container>
        <HomeRouter />
      </Container>
    </>
  );
}
