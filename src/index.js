import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const WidgetDivs = document.querySelectorAll(".entropay_widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  const root = ReactDOM.createRoot(Div);
  root.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>
  );
});
