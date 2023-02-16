import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar className="header">
      <Container
        fluid
        className="d-flex align-items-center justify-content-end"
      ></Container>
    </Navbar>
  );
};

export default Header;
