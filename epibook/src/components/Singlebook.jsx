import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Getsinglebook extends Component {
  handleClick = () => {
    this.props.onBookClick(this.props.book.asin);
  };

  render() {
    const { book, selectedAsin } = this.props;

    const isSelected = selectedAsin === book.asin;

    return (
      <div className="mb-3">
        <Card
          onClick={this.handleClick}
          style={{
            border: isSelected ? "3px solid red" : "none",
            cursor: "pointer",
            transition: "border 0.2s",
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button variant="success">COMPRA</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Getsinglebook;
