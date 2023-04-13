import { ChangeEvent, FormEvent, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("submitted, changing page in 3s...");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={firstName}
                // onChange={e => setFirstName(e.target.value)}
                onChange={handleFirstNameChange}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="check me oouuut"
                checked={checkbox}
                onChange={e => setCheckbox(e.target.checked)}
                required
              ></Form.Check>
            </Form.Group>
            <Button variant="warning" type="submit">
              Click to submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormComponent;
