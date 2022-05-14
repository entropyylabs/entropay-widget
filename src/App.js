import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App({ domElement }) {
  const entropay = domElement.getAttribute("data-entropay");
  return (
    <div className="App">
      <Modal />
    </div>
  );
}

export default App;
