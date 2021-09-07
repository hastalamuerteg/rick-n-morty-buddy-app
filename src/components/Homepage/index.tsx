//Styles
import { HomeContainer } from "./styles";

//Assets
import rickImg from "../../assets/rick_morty.png";

export function Homepage() {
  return (
    <>
      <HomeContainer>
        <h1>Welcome to Rick and Morty</h1>
        <img src={rickImg} alt="rick animation" />
      </HomeContainer>
    </>
  );
}
