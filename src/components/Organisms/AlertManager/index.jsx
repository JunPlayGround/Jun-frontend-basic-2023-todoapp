import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

export const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  if (!AlertHandlerContext.visible) {
    console.log("タスク名");
    AlertHandlerContext.setAlert("タスク名が入力されていません。"); //Alertの表示
    // const now = new Date();
    // while (true) {
    //   let closeTime = new Date();
    //   if (closeTime.getTime - now.getTime >= 500) {
    //     AlertHandlerContext.closeAlert();
    //     break;
    //   }
    // }
  } else {
    AlertHandlerContext.closeAlert();
  }
  console.log(AlertHandlerContext.visible);
  return <Alert visible={AlertHandlerContext.visible} errorText={AlertHandlerContext.errorText}/>;
};
export default AlertManager;