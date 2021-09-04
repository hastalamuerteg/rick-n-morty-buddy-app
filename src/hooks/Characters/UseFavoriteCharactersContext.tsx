//React
import { useContext } from "react";

//Context
import { FavoriteCharactersContext } from "../../contexts/Characters/FavoriteCharacters";

export function useFavoriteCharactersContext() {
  return useContext(FavoriteCharactersContext);
}
