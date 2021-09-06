//React
import { ChangeEvent } from "react";

//Services
import { getNewId } from "../../services/id";

//Types
import { ISearchInputProps } from "../../@Types/SearchInput";

//Styles
import { SearchInputContainer } from "./styles";

const inputID = getNewId();

export function SearchInput({ onInputChange }: ISearchInputProps) {
  function handleInputChange({ currentTarget }: ChangeEvent<HTMLInputElement>) {
    if (onInputChange) {
      onInputChange(currentTarget.value);
    }
  }

  return (
    <SearchInputContainer>
      <label htmlFor={inputID}></label>
      <input
        id={inputID}
        type="text"
        placeholder="Character's name"
        onChange={handleInputChange}
      />
    </SearchInputContainer>
  );
}
