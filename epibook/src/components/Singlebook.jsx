import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea"; // Importiamo il nuovo componente

class Getsinglebook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="mb-3">
        <Card onClick={() => this.setState({ selected: !this.state.selected })} style={{ border: this.state.selected ? "3px solid red" : "none" }}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="success">COMPRA</Button>
          </Card.Body>
        </Card>

        {/* SHORT-CIRCUIT OPERATOR: 
           Se selected è true, mostra CommentArea e passagli l'ASIN del libro 
        */}
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </div>
    );
  }
}

export default Getsinglebook;
