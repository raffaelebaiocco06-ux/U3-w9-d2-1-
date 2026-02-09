import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  sendComment = (e) => {
    e.preventDefault();

    // Inizio della fetch con sintassi .then()
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OTY4MzgwMjA2ODAwMTUwNGRjNWUiLCJpYXQiOjE3NzAyOTY5NjMsImV4cCI6MTc3MTUwNjU2M30.Xn_vgSgC-ty-Yo3M4wipT0vED_aVgYp7leMvdOg-boY",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Se la risposta è positiva, puliamo il form
          alert("Commento inviato con successo!");
          this.setState({
            comment: {
              comment: "",
              rate: "1",
              elementId: this.props.asin,
            },
          });
        } else {
          // Se il server risponde con un errore (es. 400 o 401)
          throw new Error("Errore durante l'invio del commento");
        }
      })
      .catch((error) => {
        // Gestione degli errori di rete o errori lanciati sopra
        console.error("Errore:", error);
        alert("Si è verificato un errore: " + error.message);
      });
  };

  render() {
    return (
      <Form className="mt-3" onSubmit={this.sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>La tua recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui..."
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
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
