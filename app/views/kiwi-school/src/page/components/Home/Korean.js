import { useNavigate } from "react-router-dom";
import { Card, CloseButton, ListGroup } from "react-bootstrap";

export default function Korean() {
  const navigate = useNavigate();
  return (
    <Card className="text-center my-3 shadow">
      <Card.Header className="py-3">
        <CloseButton
          className="position-absolute d-flex align-item-start"
          onClick={() => navigate("/study")}
        ></CloseButton>
        <h3>국어</h3>
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          <h4>
            <ListGroup.Item>1. </ListGroup.Item>
            <ListGroup.Item>2. </ListGroup.Item>
          </h4>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
