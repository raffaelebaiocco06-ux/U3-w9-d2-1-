import { ListGroup } from "react-bootstrap";
import Singlecomment from "./Singlecomment";

const CommentList = ({ comment }) => {
  return (
    <ListGroup>
      {comment.map((commento) => {
        return <Singlecomment key={commento._id} Testo={commento} />;
      })}
    </ListGroup>
  );
};
export default CommentList;
