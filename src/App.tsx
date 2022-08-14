import { ThemeProvider } from "styled-components";
import { ChampionsProvider } from "./context/champions";
import { GameProvider } from "./context/game/gameContext";
import { PagesRoutes } from "./Routes";
import { GlobalStyles } from "./styles";
import { mainTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <div className="app-wrapper">
        <ChampionsProvider>
          <GameProvider>
            <PagesRoutes />
          </GameProvider>
        </ChampionsProvider>
      </div>
    </ThemeProvider>
  );
}

export { App };
