import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, ProgressBar, Spinner } from "react-bootstrap";

export default function StudyCard({ subject, link, download, completed }) {
  const [loading, setLoad] = useState(false);
  const [rate, setRate] = useState();

  useEffect(() => {
    if (completed) {
      setRate(
        Math.ceil(
          (completed.length /
            (subject === "국어" ? 26 : subject === "수학" ? 46 : 1)) *
            100,
        ),
      );
    }
  }, [subject, completed]);

  function downloadHandle(id) {
    setLoad(true);
    const url = new URL(`http://docs.google.com/uc?export=download&id=${id}`);
    const a = document.createElement("a");
    a.href = url;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setInterval(() => setLoad(false), 5000);
  }

  return (
    <Card className="text-center my-3 shadow">
      <Card.Header className="py-3">
        <h2>{subject}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h3>학습율</h3>
        </Card.Title>
        <Card.Text className="h1 mb-3">{rate}%</Card.Text>
        <ProgressBar now={rate} animated />
        {download ? (
          <Button
            variant="outline-secondary"
            className="mt-5"
            onClick={() => downloadHandle(download)}
            disabled={loading}
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "교재 다운로드"
            )}
          </Button>
        ) : null}
        <Button as={Link} to={link} size="lg" className="w-100 mt-3">
          공부하러 가기
        </Button>
      </Card.Body>
    </Card>
  );
}
