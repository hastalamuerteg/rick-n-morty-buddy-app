//Types
import { ICharacterCardProps } from "../../@Types/Characters";

//Styles
import { CharacterCardContainer } from "./styles";

//Assets
import { FavoriteIcon, BinIcon } from "../../icons/globalIcons";

export function CharacterCard({
  character,
  onFavoriteCharacterClick,
  onDeleteFavoriteCharacterClick,
}: ICharacterCardProps) {
  function handleFavoriteClick() {
    if (onFavoriteCharacterClick) {
      onFavoriteCharacterClick(character);
    }
  }

  function handleDeleteClick() {
    if (onDeleteFavoriteCharacterClick) {
      onDeleteFavoriteCharacterClick(character.id);
    }
  }

  return (
    <>
      <CharacterCardContainer>
        <span className="bin__icon" onClick={handleDeleteClick}>
          <BinIcon size={25} />
        </span>
        <header>
          <span className="favorite__icon" onClick={handleFavoriteClick}>
            <FavoriteIcon size={25} />
          </span>

          <picture>
            <img src={character.image} alt={character.name} />
          </picture>
        </header>
        <div className="character__description">
          <h2>{character.name}</h2>
          <ul>
            <li>
              <strong>Species: </strong>
              {character.species}
            </li>
            <li>
              <strong>Status: </strong>
              {character.status}
            </li>
            <li>
              <strong>Gender: </strong>
              {character.gender}
            </li>
            <li>
              <strong>Location: </strong>
              {character.location.name}
            </li>
          </ul>
        </div>
      </CharacterCardContainer>
    </>
  );
}
