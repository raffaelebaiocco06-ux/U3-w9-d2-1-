import { Container, Row, Col, Form } from "react-bootstrap";
import Libri from "../../fantasy.json";
import Getsinglebook from "./Singlebook";
import CommentArea from "./CommentArea";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,
  };

  handleBookClick = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container>
        <Form className="m-5">
          <Form.Control type="text" placeholder="Search" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })} />
        </Form>

        <Row>
          {/* COLONNA SINISTRA - Griglia libri */}
          <Col xs={12} md={8}>
            <Row className="g-4">
              {Libri.filter((libro) => libro.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())).map((libro) => (
                <Col xs={12} md={6} lg={4} key={libro.asin}>
                  <Getsinglebook book={libro} selectedAsin={this.state.selectedAsin} onBookClick={this.handleBookClick} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* COLONNA DESTRA - Area commenti */}
          <Col xs={12} md={4}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
