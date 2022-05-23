import React, { useContext, useEffect } from "react";
import BookContext from "../context/BookContext";

import BookDataService from "../services/book.services";

import { Table, Button } from "react-bootstrap";

const BookList = () => {
  const { setBookId, books, getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };

  return (
    <div className="my-5">
      {/* <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div> */}

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
          {books.map((doc, index) => (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.title}</td>
              <td>{doc.author}</td>
              <td>{doc.status}</td>
              <td>
                <Button
                  variant="secondary"
                  className="edit"
                  onClick={() => setBookId(doc.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="delete"
                  onClick={() => deleteHandler(doc.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookList;
