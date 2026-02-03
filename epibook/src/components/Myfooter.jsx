import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4 ">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Epibook</h5>
            <p>La tua libreria digitale di fiducia.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; {new Date().getFullYear()} Epicode - Corso Web Dev</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
