//React
import { createContext, ReactNode, useState } from "react";

//Types
import { ICharacter, IFavoriteCharacterContext } from "../../@Types/Characters";

export const FavoriteCharactersContext =
  createContext<IFavoriteCharacterContext>({} as IFavoriteCharacterContext);

interface IFavoriteCharactersProvider {
  children: ReactNode;
}

export function FavoriteCharactersProvider({
  children,
}: IFavoriteCharactersProvider) {
  const [favoriteCharacters, setFavoriteCharacters] = useState<ICharacter[]>(
    []
  );

  function handleAddFavoriteCharacter(char: ICharacter) {
    const isCharacterFavorite = favoriteCharacters.find(
      ({ id }) => id === char.id
    );

    isCharacterFavorite
      ? console.log("already in")
      : setFavoriteCharacters([
          ...favoriteCharacters,
          { ...char, isFavorite: true },
        ]);
  }

  function handleRemoveFavoriteCharacter(charId: number) {
    setFavoriteCharacters(
      favoriteCharacters.filter((char) => char.id !== charId)
    );
  }

  return (
    <FavoriteCharactersContext.Provider
      value={{
        favoriteCharacters,
        handleAddFavoriteCharacter,
        handleRemoveFavoriteCharacter,
      }}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
}
