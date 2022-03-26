import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Container,
  Tab,
  Tabs,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import JoinPage from "./components/Login/JoinPage";
import LoginPage from "./components/Login/LoginPage";

export default function Login() {
  const [page, setPage] = useState("login");
  const [msg, setMsg] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) navigate("/");
  }, [navigate]);

  return (
    <Container
      fluid="sm"
      className="mt-5 position-absolute top-0 start-50 translate-middle-x"
      style={{ maxWidth: "330px" }}
    >
      <Tabs
        fill
        className="mb-3"
        activeKey={page}
        onSelect={eventKey => setPage(eventKey)}
      >
        <Tab eventKey="login" title="로그인">
          <LoginPage setMsg={setMsg} setShow={setShow} />
        </Tab>
        <Tab eventKey="join" title="회원가입">
          <JoinPage setMsg={setMsg} setShow={setShow} setPage={setPage} />
        </Tab>
      </Tabs>

      <ToastContainer className="text-center position-absolute top-50 start-50 translate-middle">
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Alert variant="primary" className="m-0 h5">
            {msg}
          </Alert>
        </Toast>
      </ToastContainer>
    </Container>
  );
}
