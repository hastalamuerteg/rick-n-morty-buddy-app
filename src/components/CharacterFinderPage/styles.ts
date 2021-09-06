import styled from "styled-components";

export const CharacterFinderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    margin: 1rem;
  }
`;
