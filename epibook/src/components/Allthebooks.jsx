import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Libri from "../../fantasy.json";

function Cardbook() {
  return (
    <div className="row">
      {Libri.map((libro) => {
        return (
          <div className="col-12 col-md-3" key={libro.asin}>
            <Card>
              <Card.Img variant="top" src={libro.img} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>
                  {libro.category} - {libro.price}€
                </Card.Text>
                <Button variant="primary">COMPRA</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Cardbook;
