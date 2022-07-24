import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { io } from "socket.io-client";
import MyMsg from "./myMessage";
import OtherMsg from "./otherMessage";
import WriteForm from "./writeForm";

const socket = io();

function makeTime(dateString) {
  const parsedDate = new Date(dateString);
  const month = parsedDate.getMonth() + 1;
  const date = parsedDate.getDate();
  const hour = parsedDate.getHours();
  const minute = parsedDate.getMinutes();
  return `${month}/${date} ${hour}:${minute}`;
}

export default function Question() {
  const [name, setName] = useState();
  const [msg, setMsg] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTo({
      top:
        containerRef.current.scrollHeight - containerRef.current.clientHeight,
      behavior: "smooth",
    });
  }, [msg]);

  useEffect(() => {
    socket.on("broadcast", data => {
      setMsg(prevMsg => [...new Set([...prevMsg, data])]);
    });

    const token = window.localStorage.getItem("token");
    fetch("/question/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(({ name, data }) => {
        setName(name);
        setMsg(data);
      });
  }, []);

  const deleteMsg = (id, name) => {
    console.log(name);
    console.log(id);
  };

  return (
    <Container>
      <Container
        ref={containerRef}
        className="mt-3 py-3 rounded-top h-auto"
        style={{
          backgroundColor: "#ABC1D1",
          minHeight: "300px",
          maxWidth: "1000px",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        {msg.map((data, index) =>
          name === data.name ? (
            <MyMsg
              key={index}
              time={makeTime(data.time)}
              text={data.text}
              deleteMsg={deleteMsg}
            />
          ) : (
            <OtherMsg
              key={index}
              writer={data.name}
              time={makeTime(data.time)}
              text={data.text}
              onClick={() => {
                deleteMsg(data._id, data.name);
              }}
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
        <WriteForm setName={setName} setMsg={setMsg} socket={socket} />
      </Container>
    </Container>
  );
}
