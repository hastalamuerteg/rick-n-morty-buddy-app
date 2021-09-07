//React
import { createContext, ReactNode, useState } from "react";

//Types
import { ICharacter, IFavoriteCharacterContext } from "../../@Types/Characters";

//Libs
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    if (isCharacterFavorite) {
      toast.warning("Character already in favorites.");
    } else {
      setFavoriteCharacters([
        ...favoriteCharacters,
        { ...char, isFavorite: true },
      ]);
      toast.success("Character successfully added to favorites!");
    }
  }

  function handleRemoveFavoriteCharacter(charId: number) {
    setFavoriteCharacters(
      favoriteCharacters.filter((char) => char.id !== charId)
    );
    toast.success("Character successfully removed from favorites!");
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
