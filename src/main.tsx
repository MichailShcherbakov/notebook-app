import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";

import "./assets/css/main.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
);
