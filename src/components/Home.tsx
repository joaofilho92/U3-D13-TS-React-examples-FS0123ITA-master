import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Nav className="gap-3">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/functional/123">Functional</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/class-component">Class</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/bootstrap-elements">Bootstrap</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Home;
