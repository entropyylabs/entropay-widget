import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { ButtonConfigProvider } from "./context/ButtonConfigProvider";

function App({ domElement }) {
  const entropay = domElement.getAttribute("data-entropay");
  return (
    <ButtonConfigProvider buttonID={entropay}>
      <div className="App">
        <Modal buttonID={entropay} />
      </div>
    </ButtonConfigProvider>
  );
}

export default App;
