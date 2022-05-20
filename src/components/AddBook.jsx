import React from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const AddBook = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBookTitle">
          <InputGroup>
            <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
            <Form.Control type="text" placeholder="Book Title" name="title" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBookAuthor">
          <InputGroup>
            <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
            <Form.Control type="text" placeholder="Book Author" name="author" />
          </InputGroup>
        </Form.Group>

        <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button variant="success">Available</Button>
          <Button variant="danger">Not Available</Button>
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
