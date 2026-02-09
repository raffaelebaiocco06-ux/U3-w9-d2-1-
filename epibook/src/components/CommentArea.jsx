import { Component } from "react";
import CommentList from "./CommentList";
import Addcomment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    iserror: false,
  };

  componentDidUpdate(prevProps) {
    // Se l'asin è cambiato E non è null, carica i commenti
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      console.log("ASIN cambiato! Carico commenti per:", this.props.asin);
      this.getComments();
    }
  }

  getComments = () => {
    this.setState({ loading: true, iserror: false });

    const URL = "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin;

    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg0OTY4MzgwMjA2ODAwMTUwNGRjNWUiLCJpYXQiOjE3NzAyOTY5NjMsImV4cCI6MTc3MTUwNjU2M30.Xn_vgSgC-ty-Yo3M4wipT0vED_aVgYp7leMvdOg-boY",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nel catch");
        }
      })
      .then((data) => {
        console.log("commenti", data);
        this.setState({ comments: data, loading: false });
      })
      .catch((err) => {
        console.log("errore", err);
        this.setState({ iserror: true, loading: false });
      });
  };

  render() {
    const { asin } = this.props;
    const { comments, loading, iserror } = this.state;

    if (!asin) {
      return (
        <div className="comment-area p-3 border bg-light">
          <h5>📚 Nessun libro selezionato</h5>
          <p>Clicca su un libro per vedere i commenti</p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="comment-area p-3 border bg-light text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3">Caricamento commenti...</p>
        </div>
      );
    }

    if (iserror) {
      return (
        <div className="comment-area p-3 border bg-light">
          <Alert variant="danger">
            <strong>❌ Errore</strong>
            <p>Impossibile caricare i commenti</p>
          </Alert>
        </div>
      );
    }

    return (
      <div className="comment-area p-3 border bg-light">
        <h5>💬 Commenti ({comments.length})</h5>

        <CommentList key={this.state.comments._id} comment={this.state.comments} />
        <Addcomment key={this.state.comments._id} />
      </div>
    );
  }
}

export default CommentArea;
