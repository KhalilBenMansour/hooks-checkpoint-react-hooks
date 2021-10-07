import { Card, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
const MovieCard = ({ movie }) => {
  return (
    <Col md={6} lg={4}>
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Text>{movie.rating}</Card.Text>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title as="h6">{movie.title}</Card.Title>
          <Card.Text>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{movie.description}</Tooltip>}
            >
              <Button variant="success">Description</Button>
            </OverlayTrigger>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
