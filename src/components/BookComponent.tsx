import { Button, Card } from "react-bootstrap";
import { IBook } from "../interfaces/IBook";

interface BookComponentProps {
  book: IBook; // interfaccia esterna, già usata in FetchComponent
  sayHello: (s: string) => void; // tipizzazione di funzione
}

const BookComponent = ({ book, sayHello }: BookComponentProps) => {
  return (
    <Card className="mb-3 text-dark">
      <Card.Img variant="top" src={book.imageUrl} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        {/* sayHello vuole una stringa come parametro */}
        <Button variant="info" onClick={() => sayHello(book.title)}>
          {book.price}€
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookComponent;
