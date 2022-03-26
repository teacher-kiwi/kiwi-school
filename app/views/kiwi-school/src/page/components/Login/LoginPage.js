import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Form,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";

export default function LoginPage() {
  const [msg, setMsg] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoad] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setLoad(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json())
      .then(data => {
        const { success, msg } = data;
        if (success) {
          console.log("로그인 성공");
        } else {
          setMsg(msg);
          setShow(true);
        }
      })
      .then(() => setLoad(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.FloatingLabel label="이름" className="mb-3">
        <Form.Control
          {...register("name")}
          type="text"
          placeholder=" "
          autoComplete="off"
        />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="비밀번호" className="mb-3">
        <Form.Control
          {...register("password")}
          type="password"
          placeholder=" "
          autoComplete="off"
        />
      </Form.FloatingLabel>
      <Button size="lg" type="submit" className="w-100">
        {loading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "로그인"
        )}
      </Button>

      <ToastContainer className="text-center position-absolute top-50 start-50 translate-middle">
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Alert variant="danger" className="m-0 h5">
            {msg}
          </Alert>
        </Toast>
      </ToastContainer>
    </Form>
  );
}
