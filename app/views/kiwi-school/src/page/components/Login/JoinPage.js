import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Spinner } from "react-bootstrap";

export default function JoinPage({ setMsg, setShow, setPage }) {
  const [loading, setLoad] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setLoad(true);
    const { name, password, checkPassword } = data;
    if (password === checkPassword) {
      fetch("/login/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      })
        .then(data => data.json())
        .then(data => {
          const { success, msg } = data;
          if (success) {
            setMsg("가입 성공!");
            setShow(true);
            setPage("login");
          } else {
            setMsg(msg);
            setShow(true);
          }
        })
        .then(() => {
          setLoad(false);
        });
    } else {
      setMsg("비밀번호를 확인해주세요.");
      setShow(true);
      setLoad(false);
    }
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
      <Form.FloatingLabel label="비밀번호 확인" className="mb-3">
        <Form.Control
          {...register("checkPassword")}
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
          "회원가입"
        )}
      </Button>
    </Form>
  );
}
