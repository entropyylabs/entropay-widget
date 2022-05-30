import React, { useState, useEffect } from "react";
import Overlay from "react-overlay-component";
import CheckoutToolkit from "../services/CheckoutToolkit";

import { useButtonConfig } from "../context/ButtonConfigProvider";
import DetailsCard from "./DetailsCard";
import PaymentCard from "./PaymentCard";

function Modal({ buttonID }) {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const { pageID } = useButtonConfig();

  const configs = {
    animate: true,
    clickDismiss: false,
    contentClass: "overlay-content",
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
        <img src="https://i.ibb.co/DtgBm1x/Group-5.png" alt="" srcset="" />
        Pay Now
      </button>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="logo-modal">
          <img src="https://i.ibb.co/nD3sPDy/logo.png" alt="" srcset="" />
          <h1>Entropay</h1>
        </div>
        <div className="modal-content">
          <DetailsCard />
          <PaymentCard />
        </div>
      </Overlay>
    </div>
  );
}

export default Modal;
