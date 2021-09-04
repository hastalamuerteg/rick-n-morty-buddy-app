//Types
import { ICharacterCardProps } from "../../@Types/Characters";

export function CharacterCard({
  character,
  onFavoriteCharacterClick,
}: ICharacterCardProps) {
  function handleCharacterCardClick() {
    if (onFavoriteCharacterClick) {
      onFavoriteCharacterClick(character);
    }
  }

  return (
    <div onClick={handleCharacterCardClick}>
      <picture>
        <img src={character.image} alt={character.name} />
      </picture>
      <h3>{character.name}</h3>
      <p>{character.status}</p>
      <ul>
        <li>{character.species}</li>
        <li>{character.gender}</li>
        <li>{character.location.name}</li>
      </ul>
    </div>
  );
}
