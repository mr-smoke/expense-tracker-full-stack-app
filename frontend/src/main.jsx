import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GridBackground } from "./components/ui/Background";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GridBackground>
      <App />
    </GridBackground>
  </StrictMode>
);
