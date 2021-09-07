import styled from "styled-components";

export const AlertMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  margin-top: 4rem;

  span {
    font-size: 3rem;
    font-weight: 600;
    margin: 1rem;
  }

  picture {
    display: block;
    margin: 1rem;

    img {
      height: 30rem;

      @media (max-width: 768px) {
        height: 20rem;
      }
    }
  }
`;
