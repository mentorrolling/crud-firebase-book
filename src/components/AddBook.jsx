import React, { useEffect, useState, useContext } from "react";
// import BookContext from "../context/BookContext";
import { BookContextData } from "../context/BookContext";

import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";

import BookDataService from "../services/book.services";

const AddBook = () => {
  const { bookId, setBookId, getBooks } = BookContextData();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");

  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  useEffect(() => {
    // console.log("El id es:", bookId);
    if (bookId) {
      editHandler();
    }
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "Debe ingresar todos los datos" });
      return;
    }

    const newBook = {
      title,
      author,
      status,
    };
    // console.log(newBook);

    try {
      if (bookId) {
        await BookDataService.updateBook(bookId, newBook);
        setMessage({ error: false, msg: "Libro actualizado!" });
        setBookId("");
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Nuevo libro agregado!" });
      }
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
    setTitle("");
    setAuthor("");
    getBooks();
  };

  const editHandler = async () => {
    setMessage("");

    try {
      const docSnap = await BookDataService.getBook(bookId);
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (error) {
      setMessage({ error: true, msg: error.message });
    }
  };

  return (
    <>
      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBookTitle">
          <InputGroup>
            <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book Title"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBookAuthor">
          <InputGroup>
            <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              name="author"
            />
          </InputGroup>
        </Form.Group>

        <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button
            disabled={flag}
            variant="success"
            onClick={(e) => {
              setStatus("Available");
              setFlag(true);
            }}
          >
            Available
          </Button>
          <Button
            variant="danger"
            disabled={!flag}
            onClick={(e) => {
              setStatus("Not Available");
              setFlag(false);
            }}
          >
            Not Available
          </Button>
        </ButtonGroup>
        <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
            Add/ Update
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddBook;
