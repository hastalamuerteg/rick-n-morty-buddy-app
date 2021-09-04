//Types
import { IAlertMessage } from "../../@Types/AlertMessage";

export function AlertMessage({ children: message }: IAlertMessage) {
  return <div>{message}</div>;
}
