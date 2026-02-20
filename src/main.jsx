import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* App debe estar dentro del Router, pero FUERA de Routes 
          si dentro de App es donde vas a definir tus rutas individuales */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);