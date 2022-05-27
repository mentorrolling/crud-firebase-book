import { createContext, useState, useContext } from "react";
import BookDataService from "../services/book.services";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [bookId, setBookId] = useState("");
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <BookContext.Provider value={{ bookId, setBookId, books, getBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const BookContextData = () => {
  return useContext(BookContext);
};

// export default BookContext;
export default BookContextProvider;
