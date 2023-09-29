import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const { visible, errorText, setAlert, closeAlert} = useAlertHandlerContext();
  console.log("Rerender AlertManager");

  // useEffect(() => {
  //   //AlertHandlerContextから直接値が取り出せる
  //   console.log(AlertHandlerContext.visible + "AlertManager");
  //   AlertHandlerContext.setAlert("message");
  //   setTimeout(() => { AlertHandlerContext.closeAlert() }, 5000);

  //   // return (
  //   //   <AlertWrapper>
  //   //     <Alert visible={AlertHandlerContext.visible} errorText={AlertHandlerContext.errorText} />
  //   //   </AlertWrapper>
  //   // );
  // }, [AlertHandlerContext]);
  // // AlertHandlerContext.setAlert("message"); //Alertの表示
  // // setTimeout(() => { AlertHandlerContext.closeAlert() }, 5000);

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

// if (!AlertHandlerContext.visible) {
//   console.log("タスク名");
//   AlertHandlerContext.setAlert("タスク名が入力されていません。"); //Alertの表示
// } else {
//   AlertHandlerContext.closeAlert();
// }
