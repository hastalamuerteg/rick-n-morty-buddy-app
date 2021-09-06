//Components
import { SearchInput } from "../../components/SearchInput/index";
import { CharactersContainer } from "../../components/CharactersContainer/index";
import { useState } from "react";
import { CharacterFinderPageContainer } from "./styles";

export function CharacterFinderPage() {
  const [searchedCharacter, setSearchedCharacter] = useState<string>("");

  function handleCharacterSearch(characterNameInput: string) {
    setSearchedCharacter(characterNameInput);
  }
  return (
    <>
      <CharacterFinderPageContainer>
        <h1>Character Finder</h1>
        <p>Type a character's name to find it.</p>
      </CharacterFinderPageContainer>
      <SearchInput onInputChange={handleCharacterSearch} />
      <CharactersContainer searchedCharacter={searchedCharacter} />
    </>
  );
}
