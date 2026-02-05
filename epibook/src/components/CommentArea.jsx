import { Component } from "react";
import CommentList from "./CommentList";
// devo fare limport di addcomment list
import Addcomment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    iserror: false,
  };
  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
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
    return (
      <div className="comment-area">
        {/*qui di devono inserire   CommentsList and AddComment. */}
        <CommentList key={this.state.comments._id} comment={this.state.comments} />
        <Addcomment key={this.state.comments._id} />
      </div>
    );
  }
}
export default CommentArea;
