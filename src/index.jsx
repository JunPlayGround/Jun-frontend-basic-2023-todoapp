import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage/index";
import "./style.css";
import { AlertHandlerProvider } from "./contexts/alert_handler";

ReactDOM.render(
  <>
  <AlertHandlerProvider>
    <MainPage />
    {/* <AlertManager /> */}
    </AlertHandlerProvider>
  </>  ,
  document.getElementById("app")
);