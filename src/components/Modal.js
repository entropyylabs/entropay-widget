import React, { useState } from "react";
import Overlay from "react-overlay-component";

function Modal({ entropay }) {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

  return (
    <div>
      <button
        onClick={() => {
          setOverlay(true);
        }}
      >
        Entropay{entropay}
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2>Sample header</h2>
        <p>text content</p>

        <button
          className="danger"
          onClick={() => {
            setOverlay(false);
          }}
        >
          close modal
        </button>
      </Overlay>
    </div>
  );
}

export default Modal;
