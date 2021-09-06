import { ICharacter } from "../../@Types/Characters";
import { useFavoriteCharactersContext } from "../../hooks/Characters/UseFavoriteCharactersContext";
import { AlertMessage } from "../AlertMessage";
import { CharacterCard } from "../CharacterCard";
import { FavoriteCharactersPageContainer } from "./styles";

export function FavoriteCharactersPage() {
  const { favoriteCharacters } = useFavoriteCharactersContext();

  if (favoriteCharacters.length <= 0)
    return <AlertMessage>You have no favorite characters yet.</AlertMessage>;

  return (
    <FavoriteCharactersPageContainer>
      <h1>Favorite Characters</h1>
      <ul>
        {favoriteCharacters &&
          favoriteCharacters.map((character) => {
            return (
              <li key={character.id}>
                <CharacterCard character={character as ICharacter} />
              </li>
            );
          })}
      </ul>
    </FavoriteCharactersPageContainer>
  );
}
