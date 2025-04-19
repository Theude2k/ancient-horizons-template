import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./components/Board";

const root = document.getElementById("root");

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <Board />
    </React.StrictMode>
  );
}
