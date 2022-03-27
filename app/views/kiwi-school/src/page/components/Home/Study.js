import { Col, Row } from "react-bootstrap";
import StudyCard from "./StudyCard";

export default function Study() {
  return (
    <Row>
      <Col md>
        <StudyCard
          subject="국어"
          link="korean"
          download="1jd91t4-h8sQ7DaN0Cbc7it-U1KUt6T-2"
        />
      </Col>
      <Col md>
        <StudyCard
          subject="수학"
          link="math"
          download="1wekt_xhSNTL4FzGFfg1zmVxHgV9QRQdC"
        />
      </Col>
    </Row>
  );
}
