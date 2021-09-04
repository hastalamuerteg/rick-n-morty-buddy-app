//Libs
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root { 
  --background: #121214;
  --shape: #202024;
  --primary: #33cc95;
  --secondary: #9E59AF;
  --text-title: #81FF5C;
  --text-body: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html { 
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body { 
  /* background: var(--background); */
  /* color: var(--text-body); */
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}

button { 
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

::-webkit-scrollbar { 
  width: .4rem;
}

::-webkit-scrollbar-track {
  background: #777;
}

::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  background: var(--primary);
}
`;
