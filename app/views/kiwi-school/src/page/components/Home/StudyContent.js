import { useNavigate } from "react-router-dom";
import { Card, CloseButton } from "react-bootstrap";

export default function StudyContent({ backPage, title, youtube }) {
  const navigate = useNavigate();
  return (
    <Card className="text-center my-3 shadow">
      <Card.Header className="py-3">
        <CloseButton
          className="position-absolute d-flex align-item-start"
          onClick={() => navigate(backPage)}
        />
        <h2>{title}</h2>
      </Card.Header>
      <Card.Body>
        {youtube.map(url => (
          <div
            style={{
              width: "100%",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <iframe
              key={url}
              title="01"
              src={`https://www.youtube.com/embed/${url}?modestbranding=1&rel=0`}
              className="w-100 h-100 position-absolute start-0"
            />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
