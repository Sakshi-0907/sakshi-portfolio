// main.tsx — the entry point. It finds <div id="root"> in index.html
// and tells React to render the <App /> component inside it.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
