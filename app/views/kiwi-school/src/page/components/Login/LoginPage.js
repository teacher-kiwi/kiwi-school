import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json())
      .then(data => console.log(data));
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
        로그인
      </Button>
    </Form>
  );
}
