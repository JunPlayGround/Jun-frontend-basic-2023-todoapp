import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    //AlertHandlerContextから直接値が取り出せる\
    console.log(AlertHandlerContext.visible + "AlertManager");

    return (
      <AlertWrapper>
        <Alert visible={AlertHandlerContext.visible} errorText={AlertHandlerContext.errorText} />
      </AlertWrapper>
    );
  }, AlertHandlerContext);

  return (
    <AlertWrapper>
      <Alert visible={AlertHandlerContext.visible} errorText={AlertHandlerContext.errorText} />
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
