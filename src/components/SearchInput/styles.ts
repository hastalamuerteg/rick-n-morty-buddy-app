import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: block;
  text-align: center;

  input {
    @media (max-width: 768px) {
      width: 90%;
      margin: 1rem;
    }

    padding: 1.5rem 1rem;
    border-radius: 0.35rem;
    border: none;
    width: 40rem;
    margin: 3rem auto;
    background: var(--shape);
    color: var(--text-title);

    &::placeholder {
      color: var(--text-title);
      font-weight: bold;
    }
  }
`;
