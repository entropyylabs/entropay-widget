import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { Helmet } from "react-helmet";

function App({ domElement }) {
  const entropay = domElement.getAttribute("data-entropay");
  return (
    <div className="App">
      <Helmet>
        <script src="https://sandboxcheckouttoolkit.rapyd.net"></script>
        <script>
          {`console.log('hello')
             window.onload = function () {
            let checkout = new RapydCheckoutToolkit({
                pay_button_text: "Click to pay",
                pay_button_color: "blue",
                id: "checkout_c860d3e323c07ed0cc72c2a114114863"
            });
            checkout.displayCheckout();
        }
        window.addEventListener('onCheckoutPaymentSuccess', function (event) {
            console.log(event.detail)
        });
        window.addEventListener('onCheckoutFailure', function (event) {
            console.log(event.detail.error)
        });
          `}
        </script>
      </Helmet>
      <Modal />
    </div>
  );
}

export default App;
