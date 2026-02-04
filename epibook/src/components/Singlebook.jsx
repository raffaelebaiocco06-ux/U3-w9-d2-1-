import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Button } from "react-bootstrap";
//prendo un solo libro ipotetico
class Getsinglebook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <div key={this.props.book.asin}>
        <Card onClick={() => this.setState({ selected: true })} style={{ border: this.state.selected ? "3px solid red" : "none" }}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              {this.props.book.category} - {this.props.book.price}€
            </Card.Text>
            <Button variant="success">COMPRA</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Getsinglebook;
