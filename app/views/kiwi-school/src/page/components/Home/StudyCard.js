import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export default function StudyCard({ subject, link }) {
  return (
    <Card className="text-center my-3 shadow">
      <Card.Header className="py-3">
        <h2>{subject}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h3>진행률</h3>
        </Card.Title>
        <Card.Text>
          <h1>????%</h1>
        </Card.Text>
        <Button as={Link} to={link} size="lg" className="w-100">
          공부하러 가기
        </Button>
      </Card.Body>
    </Card>
  );
}
