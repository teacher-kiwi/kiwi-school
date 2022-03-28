import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, Spinner } from "react-bootstrap";

export default function LoginPage({ setMsg, setShow }) {
  const [loading, setLoad] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
        const { success, msg, token } = data;
        if (success) {
          window.localStorage.setItem("token", token);
          navigate("/");
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
          minLength={3}
          maxLength={3}
        />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="비밀번호" className="mb-3">
        <Form.Control
          {...register("password")}
          type="password"
          placeholder=" "
          autoComplete="off"
          pattern="[0-9]{4}"
          minLength={4}
          maxLength={4}
          onInvalid={() => {
            setMsg("비밀번호는 네 자리 숫자로 입력하세요.");
            setShow(true);
          }}
        />
      </Form.FloatingLabel>
      <Button size="lg" type="submit" className="w-100 my-3" disabled={loading}>
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
    </Form>
  );
}
