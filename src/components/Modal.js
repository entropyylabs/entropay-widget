import React, { useState, useEffect } from "react";
import Overlay from "react-overlay-component";
import CheckoutToolkit from "../services/CheckoutToolkit";

function Modal({ entropay }) {
  const [isOpen, setOverlay] = useState(false);
  const [checkoutPage_id, setCheckoutPage_id] = useState(
    "checkout_33cc0f41e8239e5c259e3e02496c2f5f"
  );

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

  useEffect(() => {
    callRestApi();
  }, []);

  const restEndpoint = "http://localhost:5000/checkout";

  const callRestApi = async () => {
    const response = await fetch(restEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 155 }),
    });
    const jsonResponse = await response.json();
    setCheckoutPage_id(jsonResponse.body.data.id);
  };

  console.log(checkoutPage_id);
  return (
    <div>
      <CheckoutToolkit checkout_id={checkoutPage_id} />
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
        <div id="rapyd-checkout"></div>
      </Overlay>
    </div>
  );
}

export default Modal;
