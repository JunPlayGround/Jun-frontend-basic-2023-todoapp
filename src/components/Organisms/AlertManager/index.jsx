import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const { visible, errorText, setAlert, closeAlert} = useAlertHandlerContext();
  console.log("Rerender AlertManager");

  return (
    <AlertWrapper>
      <Alert visible={visible} errorText={errorText} />
    </AlertWrapper>
  );
};
export default AlertManager;

const AlertWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
