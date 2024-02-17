import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { platform, nativeTheme } from "@todesktop/client-core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rbtrouter } from "./routes/rbt";
import { bcbarouter } from "./routes/bcba";

async function changeAppThemeMode() {
  // change theme mode as normal
  document.body.classList.toggle("light");

  // if within a desktop app, also change the native theme for the window
  if (platform.todesktop.isDesktopApp()) {
    await nativeTheme.setThemeSource("light");
  }
}

changeAppThemeMode();

const router = createBrowserRouter(
  localStorage.getItem("userRole") === "BCBA" ? bcbarouter : rbtrouter,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
