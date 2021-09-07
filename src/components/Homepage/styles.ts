import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 3rem 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.5rem;
    margin: 1rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2.5rem;
    }
  }

  img {
    height: 40rem;

    @media (max-width: 768px) {
      height: 25rem;
    }
  }
`;
