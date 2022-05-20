import React from "react";

import { Table, Button } from "react-bootstrap";

const BookList = () => {
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit">Refresh List</Button>
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
        <tbody></tbody>
      </Table>
    </>
  );
};

export default BookList;
