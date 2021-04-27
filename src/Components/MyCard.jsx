import { Card, Container, Row, Col } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';

const MyCard = () => (
  <Container>
    <Row>
      {fantasy.map((item) => (
        <Col xs={6} md={3}>
          <Card style={{ width: '' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default MyCard;
