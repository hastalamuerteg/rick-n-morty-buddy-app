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
  isFavorite?: boolean;
}

export interface ICharactersContainerProps {
  searchedCharacter: string;
}

export interface ICharacterCardProps {
  character: ICharacter;
  onFavoriteCharacterClick: (character: ICharacter) => void;
  onDeleteFavoriteCharacterClick: (charId: number) => void;
}

export interface IFavoriteCharacterContext {
  favoriteCharacters: ICharacter[];
  handleAddFavoriteCharacter: (char: ICharacter) => void;
  handleRemoveFavoriteCharacter: (charId: number) => void;
}
