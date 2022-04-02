import { Row } from "react-bootstrap";

export default function OtherMsg({ writer, time, text }) {
  return (
    <>
      <span className="ms-2">김우일</span>
      <Row className="d-flex m-2 justify-content-start align-items-center">
        <p
          className="w-auto m-0 p-3 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            wordBreak: "break-all",
          }}
        >
          {text}
        </p>
        <span className="w-auto">{time}</span>
      </Row>
    </>
  );
}
