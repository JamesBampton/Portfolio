import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalProvider } from "./context/ModalContext";

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ModalProvider>
);
