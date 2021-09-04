export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

export interface ICharactersContainerProps {
  searchedCharacter: string;
}

export interface ICharacterCardProps {
  character: ICharacter;
  onFavoriteCharacterClick: (character: ICharacter) => void;
}

export interface IFavoriteCharacterContext {
  favoriteCharacters: ICharacter | ICharacter[];
  handleFavoriteCharacters: (char: ICharacter) => void;
}
