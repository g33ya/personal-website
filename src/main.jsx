// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import corkboard from "./assets/experience/corkboard.webp";
import deskBg from "./assets/skills/desk_texture.webp";

const importantImages = [corkboard, deskBg];

async function preloadImages(srcs) {
  await Promise.all(
    srcs.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        })
    )
  );
}

preloadImages(importantImages).then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});