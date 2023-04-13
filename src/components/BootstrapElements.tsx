import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const BootstrapElements = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Alert>Something went wrong</Alert>
          <h1>Hello, world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, nostrum architecto qui facere
            accusantium dolore incidunt cupiditate perspiciatis corrupti beatae magni veniam sit ratione ut molestiae
            eveniet veritatis. Assumenda?
          </p>
          <Button size="lg" variant="danger">
            Test
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BootstrapElements;
