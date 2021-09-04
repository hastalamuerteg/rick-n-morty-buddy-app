//Types
import { IButtonProps } from "../../@Types/Button";

export function PrimaryButton({
  children = "Button description",
  onButtonClick,
  type,
}: IButtonProps) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }
  return (
    <button onClick={handleButtonClick} type={type}>
      {children}
    </button>
  );
}
