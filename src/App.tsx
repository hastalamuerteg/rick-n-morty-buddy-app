//React
import { useState } from "react";

//Styles
import { GlobalStyle } from "./styles/global";

//Libs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//Pages
import { Homepage } from "./components/Homepage/index";
import { CharacterFinderPage } from "./components/CharacterFinderPage/index";
import { FavoriteCharactersPage } from "./components/FavoriteCharactersPage/index";

//Context
import { FavoriteCharactersProvider } from "./contexts/Characters/FavoriteCharacters";

//Assets
import { HomeIcon, SearchIcon, FavoriteIcon } from "./icons/globalIcons";
import logo from "./assets/logo.png";

export function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabSelect(index: number) {
    setSelectedTab(index);
  }

  return (
    <>
      <GlobalStyle />
      <FavoriteCharactersProvider>
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList className="menu__tablist">
            <picture>
              <img src={logo} alt="rick and morty logo" />
            </picture>
            <Tab className="menu__tablist--tab">
              <span>
                <HomeIcon />
              </span>
              Home
            </Tab>

            <Tab className="menu__tablist--tab">
              <span>
                <SearchIcon />
              </span>
              Character Finder
            </Tab>

            <Tab className="menu__tablist--tab">
              <span>
                <FavoriteIcon />
              </span>
              Favorite Characters
            </Tab>
          </TabList>

          <TabPanel>
            <Homepage />
          </TabPanel>

          <TabPanel>
            <CharacterFinderPage />
          </TabPanel>
          <TabPanel>
            <FavoriteCharactersPage />
          </TabPanel>
        </Tabs>
      </FavoriteCharactersProvider>
    </>
  );
}

export default App;
