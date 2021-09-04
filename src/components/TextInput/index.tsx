//React
import { ChangeEvent } from "react";

//Services
import { getNewId } from "../../services/id";

interface ITextInputProps {
  labelDescription: string;
  onInputChange: (args: string) => void;
  id: string;
}

export function TextInput({
  labelDescription = "Label description",
  onInputChange,
  id = getNewId(),
}: ITextInputProps) {
  function handleInputChange({ currentTarget }: ChangeEvent<HTMLInputElement>) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div>
      <label htmlFor={id}>{labelDescription}</label>

      <input
        id={id}
        type="text"
        onChange={handleInputChange}
        placeholder="Title"
      />
    </div>
  );
}
