import { Container, Tab, Tabs } from "react-bootstrap";
import JoinPage from "./components/Login/JoinPage";
import LoginPage from "./components/Login/LoginPage";

export default function Login() {
  return (
    <Container
      fluid="sm"
      className="mt-5 position-absolute top-0 start-50 translate-middle-x"
      style={{ maxWidth: "330px" }}
    >
      <Tabs defaultActiveKey="login" className="mb-3">
        <Tab eventKey="login" title="로그인">
          <LoginPage></LoginPage>
        </Tab>
        <Tab eventKey="join" title="회원가입">
          <JoinPage></JoinPage>
        </Tab>
      </Tabs>
    </Container>
  );
}
