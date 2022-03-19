import { Button, Form } from "react-bootstrap";

export default function JoinPage() {
  return (
    <Form>
      <Form.FloatingLabel label="이름" className="mb-3">
        <Form.Control type="text" placeholder=" " />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="비밀번호" className="mb-3">
        <Form.Control type="password" placeholder=" " />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="비밀번호 확인" className="mb-3">
        <Form.Control type="password" placeholder=" " />
      </Form.FloatingLabel>
      <Button size="lg" type="submit" className="w-100">
        회원가입
      </Button>
    </Form>
  );
}
