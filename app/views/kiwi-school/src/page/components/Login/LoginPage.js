import { Button, Form } from "react-bootstrap";

export default function LoginPage() {
  return (
    <Form>
      <Form.FloatingLabel label="이름" className="mb-3">
        <Form.Control type="text" placeholder=" " />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="비밀번호" className="mb-3">
        <Form.Control type="password" placeholder=" " />
      </Form.FloatingLabel>
      <Button size="lg" type="submit" className="w-100">
        로그인
      </Button>
    </Form>
  );
}
