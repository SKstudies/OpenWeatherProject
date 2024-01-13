import  React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import WeatherCard from "./components/WeatherCard.js";
import App from "./components/App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
