import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function CheckoutToolkit({ buttonID }) {
  console.log(buttonID);

  const [pageID, setPageID] = useState();

  return (
    <Helmet>
      <script src="https://sandboxcheckouttoolkit.rapyd.net"></script>
      <script>
        {`console.log('hello')
        console.log("${pageID}")
            const Endpoint = "https://entropay-backend.herokuapp.com/get-checkout/${buttonID}"
            const callRestApi = async () => {
    const response = await fetch(Endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    const checkout_id = jsonResponse.checkoutPage
    console.log("hello",jsonResponse.checkoutPage);
    return checkout_id;
  };
            window.onload = async function () {
               const checkout_id =  await callRestApi()
            let checkout = new RapydCheckoutToolkit({
                pay_button_text: "Click to pay",
                pay_button_color: "blue",
                id: checkout_id
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
