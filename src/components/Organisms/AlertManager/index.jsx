import { useAlertHandlerContext } from "path/to/contexts/alert_handler";

export const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
    const AlertHandlerContext = useAlertHandlerContext();
    
  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  if (AlertHandlerContext.visible) {
    AlertHandlerContext.setAlert("タスク名が入力されていません。"); //Alertの表示
  } else {
      AlertHandlerContext.closeAlert();
  }
};
