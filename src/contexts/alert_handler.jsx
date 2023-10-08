import React, { createContext, memo, useCallback, useContext, useState } from "react";
import Alert from "../components/Atoms/Alert";
import AlertManager from "../components/Organisms/AlertManager";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    //Alert に表示する内容を指定し、Alert を開く関数
    setAlertState({visible: true, errorText: errorText});
  };

  const closeAlert = useCallback(()=>{
    //Alert を閉じる関数
    setAlertState({visible: false, errorText: alertState.errorText});
  }, [alertState.visible]);

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return <AlertHandlerContext.Provider value={contextValue}>{children}</AlertHandlerContext.Provider>;
};

export const useAlertHandlerContext = () => {return useContext(AlertHandlerContext);}