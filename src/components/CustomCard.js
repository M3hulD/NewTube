import Button from "@restart/ui/esm/Button";
import { Card, Col, CardImg } from "react-bootstrap";

const CustomCard = ({ title, views, uploadedAgo, uploadedBy, image }) => {
    return (
        <Col>
          <Card bg="dark">
            <CardImg variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{uploadedBy}</Card.Text>
              <Card.Text>{uploadedAgo} | {views} Views</Card.Text>
              <Button variant="danger">Subscribed</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    };
export default CustomCard;