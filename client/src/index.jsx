import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById("root")
);
