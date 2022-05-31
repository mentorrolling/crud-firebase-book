import { useState } from "react";
import BookContextProvider from "./context/BookContext";

import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <BookContextProvider>
        <Container style={{ width: "400px" }}>
          <Row className="mt-5">
            <Col>
              <AddBook />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <BookList />
            </Col>
          </Row>
        </Container>
      </BookContextProvider>
    </>
  );
}

export default App;
