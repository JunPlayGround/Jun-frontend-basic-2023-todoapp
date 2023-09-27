import React, { createContext, useContext, useState } from "react";
import Alert from "../components/Atoms/Alert";

//const showMessage = "タスク名が入力されていません。";
const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    //Alert に表示する内容を指定し、Alert を開く関数
    let setState = alertState;
    setState.errorText = errorText;
    setState.visible = !setState.visible;
    setAlertState(setState);
    Alert(setState);
  };

  const closeAlert = () => {
    //Alert を閉じる関数
    let setState = alertState;
    setState.errorText = "";
    setState.visible = !setState.visible;
    setAlertState(setState);
    Alert(setState);
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return <AlertHandlerContext.Provider value={contextValue}>{children}</AlertHandlerContext.Provider>;
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
