//React
import { useState } from "react";

//Styles
import { GlobalStyle } from "./styles/global";

//Components
import { SearchInput } from "./components/SearchInput/index";
import { CharactersContainer } from "./components/CharactersContainer/index";

//Context
import { FavoriteCharactersProvider } from "./contexts/Characters/FavoriteCharacters";

export function App() {
  const [searchedCharacter, setSearchedCharacter] = useState<string>("");

  function handleCharacterSearch(characterNameInput: string) {
    setSearchedCharacter(characterNameInput);
  }

  return (
    <>
      <GlobalStyle />
      <FavoriteCharactersProvider>
        <h1>Characters Rick and Morty</h1>
        <h2>Type a Character name to know more about it</h2>
        <SearchInput onInputChange={handleCharacterSearch} />
        <CharactersContainer searchedCharacter={searchedCharacter} />
      </FavoriteCharactersProvider>
    </>
  );
}

export default App;
