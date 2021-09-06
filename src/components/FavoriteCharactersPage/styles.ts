import styled from "styled-components";

export const FavoriteCharactersPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  h1 {
    font-size: 3rem;
    margin: 1rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
