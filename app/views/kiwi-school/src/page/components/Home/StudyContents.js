import { Link, useNavigate } from "react-router-dom";
import { Badge, Card, CloseButton, ListGroup } from "react-bootstrap";

export default function StudyContents({ subject, contents, completed }) {
  const navigate = useNavigate();

  return (
    <Card className="text-center mt-3 mb-5 shadow">
      <Card.Header className="py-3">
        <CloseButton
          className="position-absolute d-flex align-item-start"
          onClick={() => navigate("/study")}
        ></CloseButton>
        <h3>{subject}</h3>
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          <h4>
            {contents.map(({ title, youtube }, index) => (
              <ListGroup.Item
                key={index}
                as={Link}
                to={(index + 1).toString().padStart(2, "0")}
                className="py-3"
                action
              >
                {index + 1 + ". " + title}
                {completed?.includes(youtube) ? (
                  <Badge pill className="ms-2">
                    완료
                  </Badge>
                ) : (
                  ""
                )}
              </ListGroup.Item>
            ))}
          </h4>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
