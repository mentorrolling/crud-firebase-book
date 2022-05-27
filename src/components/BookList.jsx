import React, { useEffect, useState } from "react";

import bookServices from "../services/book.services";

import { Table, Button } from "react-bootstrap";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    let data = await bookServices.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BookList;
