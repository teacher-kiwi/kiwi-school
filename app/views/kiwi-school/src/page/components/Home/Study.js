import { Col, Row } from "react-bootstrap";
import StudyCard from "./StudyCard";

export default function Study() {
  return (
    <Row>
      <Col md>
        <StudyCard subject="국어" link="korean" />
      </Col>
      <Col md>
        <StudyCard subject="국어" link="korean" />
      </Col>
      <Col md>
        <StudyCard subject="국어" link="korean" />
      </Col>
    </Row>
  );
}
