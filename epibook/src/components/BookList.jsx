import { Container, Row, Col } from "react-bootstrap";
import Libri from "../../fantasy.json";
import Getsinglebook from "./Singlebook";

const BookList = function () {
  return (
    <Container>
      <Row g={4}>
        {Libri.map((libro) => {
          return (
            <Col xs={12} md={3} key={libro.asin}>
              <Getsinglebook book={libro} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default BookList;
