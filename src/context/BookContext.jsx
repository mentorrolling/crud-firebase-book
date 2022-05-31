import { createContext, useState } from "react";
import bookServices from "../services/book.services";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    let data = await bookServices.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <BookContext.Provider value={{ books, getBooks, bookId, setBookId }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
