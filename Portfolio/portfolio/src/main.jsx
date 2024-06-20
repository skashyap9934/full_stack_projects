// Packages
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ThemeContextProvider>
);
