import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  display: block;
  margin: 0.5rem;
  width: 19rem;
  height: 30rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  background: var(--shape);
  overflow: hidden;
  position: relative;

  .bin__icon {
    top: 1rem;
    left: 1rem;
    z-index: 10;
    position: absolute;
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 10rem;
    background: linear-gradient(to top left, var(--primary), var(--secondary));
    position: relative;

    .favorite__icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    picture {
      position: absolute;
      top: 2rem;
      display: block;
      border-radius: 50%;
      height: 11rem;
      width: 11rem;
    }

    img {
      border-radius: 50%;
      border: 0.4rem solid var(--shape);
      background: no-repeat var(--shape);
      width: 100%;
    }
  }

  .character__description {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin: 1rem 0;

    h2 {
      color: var(--text-title);
      font-size: 2rem;
      margin-top: 3rem;
    }

    li {
      display: block;
      width: 100%;
    }

    strong {
      color: var(--text-title);
    }
  }

  /* button {
    width: 100%;
    padding: 0.5rem 0;
    border: none;
    background: var(--secondary);
    color: var(--text-body);
  } */
`;
