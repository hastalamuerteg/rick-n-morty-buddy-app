//Types
import { ICharacter } from "../../@Types/Characters";

//Hooks
import { useFavoriteCharactersContext } from "../../hooks/Characters/UseFavoriteCharactersContext";

//Components
import { AlertMessage } from "../AlertMessage";
import { CharacterCard } from "../CharacterCard";

//Styles
import { FavoriteCharactersPageContainer } from "./styles";

export function FavoriteCharactersPage() {
  const {
    favoriteCharacters,
    handleAddFavoriteCharacter,
    handleRemoveFavoriteCharacter,
  } = useFavoriteCharactersContext();

  if (favoriteCharacters.length <= 0)
    return <AlertMessage>You have no favorite characters yet.</AlertMessage>;

  function handleFavoriteCharacter(char: ICharacter) {
    handleAddFavoriteCharacter(char);
  }

  function handleDeleteFavoriteCharacter(charId: number) {
    handleRemoveFavoriteCharacter(charId);
  }

  return (
    <FavoriteCharactersPageContainer>
      <h1>Favorite Characters</h1>
      <ul>
        {favoriteCharacters.map((char) => {
          return (
            <li key={char.id}>
              <CharacterCard
                character={char}
                onFavoriteCharacterClick={handleFavoriteCharacter}
                onDeleteFavoriteCharacterClick={handleDeleteFavoriteCharacter}
              />
            </li>
          );
        })}
      </ul>
    </FavoriteCharactersPageContainer>
  );
}
