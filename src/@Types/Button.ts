export interface IButtonProps {
  children: string;
  onButtonClick: () => void;
  type: "button" | "submit";
}
