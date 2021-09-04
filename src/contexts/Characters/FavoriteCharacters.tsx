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

  function handleFavoriteCharacters(char: ICharacter) {
    setFavoriteCharacters([...favoriteCharacters, char]);
  }

  return (
    <FavoriteCharactersContext.Provider
      value={{ favoriteCharacters, handleFavoriteCharacters }}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
}
