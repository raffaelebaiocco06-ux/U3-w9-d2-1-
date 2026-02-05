import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin, // L'ID del libro passato dal padre
    },
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer IL_TUO_TOKEN_QUI",
        },
      });
      if (response.ok) {
        alert("Commento inviato con successo!");
        this.setState({
          comment: {
            comment: "",
            rate: "1",
            elementId: this.props.asin,
          },
        });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Form className="mt-3" onSubmit={this.sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui il tuo commento..."
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia Recensione
        </Button>
      </Form>
    );
  }
}

export default AddComment;
