import { Row } from "react-bootstrap";

export default function MyMsg({ time, text }) {
  return (
    <Row className="d-flex m-2 justify-content-end align-items-center flex-wrap-reverse">
      <span className="w-auto">{time}</span>
      <p
        className="w-auto m-0 p-3 shadow-sm"
        style={{
          backgroundColor: "#FEE500",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          wordBreak: "break-all",
        }}
      >
        {text}
      </p>
    </Row>
  );
}
