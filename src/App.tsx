import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { ChampionsProvider } from "./context/champions";
import { GameProvider } from "./context/game/gameContext";
import { PagesRoutes } from "./Routes";
import { GlobalStyles } from "./styles";
import { mainTheme } from "./styles/themes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <ToastContainer
        position="bottom-center"
        pauseOnHover={false}
        autoClose={2200}
        theme="dark"
        newestOnTop
        toastStyle={{
          backgroundColor: mainTheme.colors.primary,
          color: mainTheme.colors.darkText,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
        }}
        progressStyle={{ backgroundColor: mainTheme.colors.darkText }}
      />
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
