import { useState } from "react";

import BookContext from "./context/BookContext";
import BookDataService from "./services/book.services";

import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <BookContext.Provider value={{ bookId, setBookId, books, getBooks }}>
        <Container style={{ width: "400px" }}>
          <Row className="mt-5">
            <Col>
              {/* <AddBook id={bookId} setBookId={setBookId} /> */}
              <AddBook />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {/* <BookList getBookId={getBookIdHandler} /> */}
              <BookList />
            </Col>
          </Row>
        </Container>
      </BookContext.Provider>
    </>
  );
}

export default App;
