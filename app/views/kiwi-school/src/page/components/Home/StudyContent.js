import { useNavigate } from "react-router-dom";
import { Card, CloseButton } from "react-bootstrap";
import YouTube from "react-youtube";

function completed(subject, id) {
  const token = window.localStorage.getItem("token");
  fetch("/study/complete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ subject, id, token }),
  })
    .then(res => res.json())
    .then(json => console.log(json));
}

export default function StudyContent({ subject, backPage, title, youtube }) {
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
        <div
          style={{
            width: "100%",
            paddingBottom: "56.25%",
            position: "relative",
          }}
        >
          <YouTube
            key={youtube}
            videoId={youtube}
            title="01"
            className="w-100 h-100 position-absolute start-0"
            opts={{
              playerVars: {
                modestbranding: 1,
                rel: 0,
                controls: 0,
                disablekb: 1,
              },
            }}
            onEnd={() => completed(subject, youtube)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
