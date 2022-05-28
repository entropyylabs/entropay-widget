import React, { useState, useEffect } from "react";
import Overlay from "react-overlay-component";
import CheckoutToolkit from "../services/CheckoutToolkit";

import { useButtonConfig } from "../context/ButtonConfigProvider";
import logo from "../assets/logo.svg";

function Modal({ buttonID }) {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const { pageID } = useButtonConfig();

  console.log(pageID);

  const configs = {
    animate: true,
    clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

  return (
    <div>
      <CheckoutToolkit buttonID={buttonID} />
      <button
        id="entropay-button"
        onClick={() => {
          setOverlay(true);
        }}
      >
        <img src="https://i.ibb.co/xjfjQ1q/Group-1.png" alt="" srcset="" />
        Entropay
      </button>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2>Checkout powered by Entropay</h2>
        <p>Enter details </p>

        <button
          className="danger"
          onClick={() => {
            setOverlay(false);
          }}
        >
          close modal
        </button>
        <div id="rapyd-checkout"></div>
      </Overlay>
    </div>
  );
}

export default Modal;
