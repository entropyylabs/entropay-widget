import React, { createContext, useContext, useEffect, useState } from "react";

const ButtonConfigContext = createContext();

export function ButtonConfigProvider({ children, buttonID }) {
  const [pageID, setPageID] = useState();
  const restEndpoint = `https://entropay-backend.herokuapp.com/get-checkout/${buttonID}`;

  const callRestApi = async () => {
    const response = await fetch(restEndpoint, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await response.json();
    setPageID(jsonResponse.checkoutPage);
    console.log("calling");
  };

  useEffect(() => {
    callRestApi();
  }, []);
  return (
    { pageID } && (
      <>
        <ButtonConfigContext.Provider value={{ pageID }}>
          {children}
        </ButtonConfigContext.Provider>
      </>
    )
  );
}

// Hook to use userAuthContext
export function useButtonConfig() {
  return useContext(ButtonConfigContext);
}
