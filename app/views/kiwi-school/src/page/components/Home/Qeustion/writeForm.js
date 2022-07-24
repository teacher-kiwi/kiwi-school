import { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function WriteForm({ setName, setMsg, socket }) {
  const [loading, setLoad] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  function writeMsg({ text }) {
    setLoad(true);
    const token = window.localStorage.getItem("token");
    const time = new Date();

    fetch("/question/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, text, time }),
    })
      .then(res => res.json())
      .then(({ success, name, data }) => {
        if (success) {
          // setName(name);
          // setMsg(data);
          socket.emit("user-send", { name, text, time });
        }
      })
      .then(() => setValue("text", ""))
      .then(() => setLoad(false));
  }

  return (
    <Form onSubmit={handleSubmit(writeMsg)}>
      <Row>
        <Col>
          <Form.Control
            {...register("text")}
            type="text"
            maxLength={100}
            autoComplete="off"
            placeholder="질문을 남기세요."
          ></Form.Control>
        </Col>
        <Col xs="auto">
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "전송"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
