import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Epinav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EPIBOOK</Navbar.Brand>
        <Navbar.Collapse className="justify-content-start ">
          <Navbar.Text>
            <a href="#">Home</a>
            <a href="#"> About</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Account : <a href="#login">Raffi</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Epinav;
