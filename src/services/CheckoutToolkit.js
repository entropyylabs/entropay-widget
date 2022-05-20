import React from "react";
import { Helmet } from "react-helmet";

function CheckoutToolkit({ checkout_id }) {
  console.log(checkout_id);
  return (
    <Helmet>
      <script src="https://sandboxcheckouttoolkit.rapyd.net"></script>
      <script>
        {`console.log('hello')
            window.onload = function () {
            let checkout = new RapydCheckoutToolkit({
                pay_button_text: "Click to pay",
                pay_button_color: "blue",
                id: "${checkout_id}"
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
  );
}

export default CheckoutToolkit;
