import React, { useContext, useEffect } from "react";

import { BookContext } from "../context/BookContext";

import bookServices from "../services/book.services";

import { Table, Button } from "react-bootstrap";

const BookList = () => {
  const { books, setBookId, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  const handlerDelete = async (id) => {
    await bookServices.deleteBook(id);
    getBooks();
  };

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
              <td>
                <button
                  className="btn btn-warning me-2 btn-sm"
                  onClick={() => setBookId(book.id)}
                >
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm "
                  onClick={() => handlerDelete(book.id)}
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BookList;
