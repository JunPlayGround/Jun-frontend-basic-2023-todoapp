import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage/index";
import "./style.css";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import AlertManager from "./components/Organisms/AlertManager";

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
