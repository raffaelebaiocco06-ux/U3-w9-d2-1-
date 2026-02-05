const Singlecomment = ({ Testo }) => {
  return (
    <ListGroup.Item>
      {Testo.rate}⭐ - {Testo.comment}
    </ListGroup.Item>
  );
};
export default Singlecomment;
