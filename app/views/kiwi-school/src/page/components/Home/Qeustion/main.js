import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MyMsg from "./myMessage";
import OtherMsg from "./otherMessage";
import WriteForm from "./writeForm";

function makeTime(dateString) {
  const parsedDate = new Date(dateString);
  const month = parsedDate.getMonth() + 1;
  const date = parsedDate.getDate();
  const hour = parsedDate.getHours();
  const minute = parsedDate.getMinutes();
  return `${month}/${date} ${hour}:${minute}`;
}

export default function Question() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    fetch("/question/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(({ name, data }) => setMsg({ name, data }));
  }, []);

  return (
    <Container>
      <Container
        className="mt-3 py-3 rounded-top h-auto"
        style={{
          backgroundColor: "#ABC1D1",
          minHeight: "300px",
          maxWidth: "1000px",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {msg.data?.map(data =>
          msg.name === data.name ? (
            <MyMsg key={data._id} time={makeTime(data.time)} text={data.text} />
          ) : (
            <OtherMsg
              key={data._id}
              writer={data.name}
              time={makeTime(data.time)}
              text={data.text}
            />
          ),
        )}
      </Container>
      <Container
        className="mb-3 py-3 rounded-bottom h-auto"
        style={{
          backgroundColor: "#ABC1D1",
          maxWidth: "1000px",
        }}
      >
        <WriteForm setMsg={setMsg} />
      </Container>
    </Container>
  );
}
