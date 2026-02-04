import { Container, Row, Col, Form } from "react-bootstrap";
import Libri from "../../fantasy.json";
import Getsinglebook from "./Singlebook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Form className="m-5">
          <Form.Control type="text" placeholder="Search" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })} />
        </Form>
        <Row g={4}>
          {Libri.filter((libro) => libro.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())).map((libro) => {
            return (
              <Col xs={12} md={3} key={libro.asin}>
                <Getsinglebook book={libro} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
