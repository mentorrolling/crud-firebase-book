import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";

import bookServices from "../services/book.services";

import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");

  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const { bookId, setBookId, getBooks } = useContext(BookContext);

  useEffect(() => {
    if (bookId) {
      bookEdit();
    }
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "Debe ingresar todos los datos" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };
    try {
      if (bookId) {
        await bookServices.updateBook(bookId, newBook);
        setMessage({ error: false, msg: "Libro Actualizado" });
        setBookId("");
        setTitle("");
        setAuthor("");
      } else {
        await bookServices.addBook(newBook);
        setMessage({ error: false, msg: "Nuevo libro agregado!" });
        setTitle("");
        setAuthor("");
      }
    } catch (err) {
      setMessage({ error: false, msg: err.message });
    }
    getBooks();
  };

  const bookEdit = async () => {
    setMessage("");
    try {
      const bookSnap = await bookServices.getBook(bookId);
      setTitle(bookSnap.data().title);
      setAuthor(bookSnap.data().author);
      setStatus(bookSnap.data().status);

      if (bookSnap.data().status === "Available") {
        setFlag(true);
      } else {
        setFlag(false);
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
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
              name="title"
              value={title}
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
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button
            variant="success"
            disabled={flag}
            onClick={() => {
              setStatus("Available");
              setFlag(true);
            }}
          >
            Available
          </Button>
          <Button
            variant="danger"
            disabled={!flag}
            onClick={() => {
              setStatus("Not available");
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
