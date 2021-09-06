//Types
import { ICharacterCardProps } from "../../@Types/Characters";

//Styles
import { CharacterCardContainer } from "./styles";

//Assets
import { FavoriteIcon, FavoriteIconFilled } from "../../icons/globalIcons";
import { useState } from "react";

export function CharacterCard({
  character,
  onFavoriteCharacterClick,
}: ICharacterCardProps) {
  function handleCharacterCardClick() {
    setIsFavorite(!isFavorite);
    if (onFavoriteCharacterClick) {
      onFavoriteCharacterClick(character);
    }
  }

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CharacterCardContainer>
      <header>
        <span onClick={handleCharacterCardClick}>
          {isFavorite ? (
            <FavoriteIconFilled size={25} />
          ) : (
            <FavoriteIcon size={25} />
          )}
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
  );
}
