import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import AddBook from "./components/AddBook";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <AddBook /> */}
  </React.StrictMode>
);
