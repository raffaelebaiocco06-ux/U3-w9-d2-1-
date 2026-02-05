const CommentList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((commento) => (
        <Singlecomment key={commento._id} Testo={commento} />
      ))}
    </ListGroup>
  );
};
export default CommentList;
