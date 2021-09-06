//Types
import { IAlertMessage } from "../../@Types/AlertMessage";

//Styles
import { AlertMessageContainer } from "./styles";

//Assets
import rickImg from "../../assets/rick.png";

export function AlertMessage({ children: message }: IAlertMessage) {
  return (
    <AlertMessageContainer>
      <span>Oops...</span>
      <h2>{message}</h2>
      <picture>
        <img src={rickImg} alt="rick's face" />
      </picture>
    </AlertMessageContainer>
  );
}
