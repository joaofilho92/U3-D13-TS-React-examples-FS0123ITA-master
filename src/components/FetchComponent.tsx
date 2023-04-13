import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookComponent from "./BookComponent";
import { IBook } from "../interfaces/IBook";
// https://striveschool-api.herokuapp.com/food-books

// interface IBook {
//   id: number;
//   title: string;
//   price: number;
//   imageUrl: string;
//   description: string;
// }

const FetchComponent = () => {
  const URL = "https://striveschool-api.herokuapp.com/food-books";

  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const booksFromApi = await response.json();
        setBooks(booksFromApi);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sayHello = (str: string) => {
    console.log("hello " + str);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container>
      <Row md={3} className="justify-content-center">
        {books.map(book => (
          <Col key={book.id}>
            {/* sayHello è una funzione tipizzata nelle props di BookComponentProps */}
            <BookComponent book={book} sayHello={sayHello} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default FetchComponent;
