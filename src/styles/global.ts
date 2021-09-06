//Libs
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root { 
  --background: #5a1d7d;
  --shape: #28282d;
  --primary: #64208b;
  --secondary: #9E59AF;
  --text-title: #01C49A;
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
  background: var(--background);
  color: var(--text-body);
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

ul { 
  list-style: none;
}

a { 
  text-decoration: none
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

.menu__tablist { 
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, .3);

  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
  }

  picture { 
    display: block;
    margin: 1rem;
    img { 
      height: 3rem;
    }
}

.menu__tablist--tab { 
  display: flex;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: .35rem;
  border-bottom: .1rem solid transparent;
  transition: all .2s;

  
  &:hover {
    border-bottom: .1rem solid #fff;
    }
  }

  span { 
    display: flex ;
    align-items: center;
    margin-right: 1rem;
  }
}
`;
