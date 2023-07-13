// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Styles
import "./index.css";
import theme from "./theme.ts";
// Chakra
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
