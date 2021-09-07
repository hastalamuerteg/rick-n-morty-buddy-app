//React
import { useEffect, useState } from "react";

//Styles
import { CharactersListContainer } from "./styles";

//Components
import { Loading } from "../Loading/index";
import { CharacterCard } from "../CharacterCard/index";
import { AlertMessage } from "../AlertMessage/index";

//Services
import { apiGetCharacterByName } from "../../services/api";

//Types
import { ICharacter, ICharactersContainerProps } from "../../@Types/Characters";

//Hooks
import { useFavoriteCharactersContext } from "../../hooks/Characters/UseFavoriteCharactersContext";

export function CharactersContainer({
  searchedCharacter,
}: ICharactersContainerProps) {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { handleAddFavoriteCharacter, handleRemoveFavoriteCharacter } =
    useFavoriteCharactersContext();

  function handleFavoriteCharacter(char: ICharacter) {
    handleAddFavoriteCharacter(char);
  }

  function handleDeleteFavoriteCharacter(charId: number) {
    handleRemoveFavoriteCharacter(charId);
  }

  useEffect(() => {
    async function getSearchedCharacter() {
      if (searchedCharacter.length >= 4) {
        setIsLoading(true);
        try {
          const fetchedCharacters: ICharacter[] = await apiGetCharacterByName(
            searchedCharacter
          );
          setCharacters(fetchedCharacters);
          setError(false);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          setError(true);
        }
      }
    }
    getSearchedCharacter();
  }, [searchedCharacter]);

  if (isLoading) return <Loading />;

  if (error) return <AlertMessage>This character does not exist</AlertMessage>;

  return (
    <>
      <CharactersListContainer>
        <ul>
          {characters.map((char) => (
            <li key={char.id}>
              <CharacterCard
                character={char}
                onFavoriteCharacterClick={handleFavoriteCharacter}
                onDeleteFavoriteCharacterClick={handleDeleteFavoriteCharacter}
              />
            </li>
          ))}
        </ul>
      </CharactersListContainer>
    </>
  );
}
