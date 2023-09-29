import React, { createContext, useContext, useState } from "react";
import Alert from "../components/Atoms/Alert";
import AlertManager from "../components/Organisms/AlertManager";

//const showMessage = "タスク名が入力されていません。";
const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    //Alert に表示する内容を指定し、Alert を開く関数
    console.log("setAlert "+ errorText);
    let setState = alertState;
    setState.errorText = errorText;
    setState.visible = true;
    setAlertState(setState);
    console.log(alertState.visible+" "+alertState.errorText);
  };

  const closeAlert = () => {
    //Alert を閉じる関数
    let closeState = alertState;
    console.log("closeAlert "+ alertState.errorText);
    // Alert(setState);
    closeState.visible = false;
    setAlertState(closeState);
    console.log(alertState.visible+" "+alertState.errorText);
    closeState.errorText = "";
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return <AlertHandlerContext.Provider value={contextValue}>{children}</AlertHandlerContext.Provider>;
};

export const useAlertHandlerContext = () => {return useContext(AlertHandlerContext);}