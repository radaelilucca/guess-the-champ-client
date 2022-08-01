import { ChampionsProvider } from "./context/champions";
import { GameProvider } from "./context/game/gameContext";
import { PagesRoutes } from "./Routes";

function App() {
  return (
    <div className="bg-darkBackground h-screen w-screen flex justify-center items-center font-sans">
      <ChampionsProvider>
        <GameProvider>
          <PagesRoutes />
        </GameProvider>
      </ChampionsProvider>
    </div>
  );
}

export { App };
