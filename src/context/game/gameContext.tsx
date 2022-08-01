import { createContext, useContext, useMemo, useState } from "react";
import { getRandomNumberInRange } from "../../utils";
import {
  ChampionDataType,
  ChampionsContext,
  ChampionsContextType,
} from "../champions";
import {
  CleanChampionSpellType,
  GameContextType,
  GameStateType,
  guessingModesMap,
} from "./game.types";

const GameContext = createContext<GameContextType | null>(null);

const PASSIVE_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/passive";
const SPELL_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell";

const modes = [
  guessingModesMap.abilityImage,
  guessingModesMap.abilityDescription,
  guessingModesMap.blurb,
];

interface IGameProviderProps {
  children: React.ReactNode;
}

const GameProvider = ({ children }: IGameProviderProps) => {
  const [gameState, setGameState] = useState<GameStateType>({
    isLoading: true,
  } as GameStateType);

  const { getRandomChampionId, getChampionData } = useContext(
    ChampionsContext
  ) as ChampionsContextType;

  // currentChampion: ChampionDataType;
  // guessingMode: "ability-image" | "ability-description" | "blurb",
  // totalGuesses: number,
  // score: number,

  const startGame = async () => {
    const randomChampionData = await getChampionData({
      championId: getRandomChampionId(),
    });

    const guessingMode: keyof typeof guessingModesMap = modes[
      getRandomNumberInRange({ min: 0, max: modes.length - 1 })
    ] as keyof typeof guessingModesMap;

    if (randomChampionData) {
      console.log("CHAMP ->", randomChampionData);

      const skillIndex = getRandomNumberInRange({
        min: 0,
        max: randomChampionData.spells.length - 1,
      });

      console.log("SKILL INDEX =>", skillIndex);

      const { name, description, id, image } =
        randomChampionData?.spells[skillIndex || 0];

      console.log("RAW SKILL -> ", randomChampionData?.spells[skillIndex || 0]);

      const randomSpell: CleanChampionSpellType = {
        id,
        name,
        description,
        imageSRC: `${SPELL_BASE_URL}/${image.full}`,
      };

      const championPassive = randomChampionData.passive;

      const passive: CleanChampionSpellType = {
        id: championPassive.image.full,
        name: championPassive.name,
        description: championPassive.description,
        imageSRC: `${PASSIVE_BASE_URL}/${championPassive.image.full}`,
      };

      console.log(randomSpell.imageSRC);
      console.log(passive.imageSRC);

      console.log(randomSpell);

      const newGameState = {
        currentChampion: randomChampionData,
        guessingMode,
        totalGuesses: 0,
        score: 0,
        isLoading: false,
        randomSpell,
        passive,
      };
      setGameState(newGameState);

      console.log({ newGameState });
    }
  };

  const values = useMemo(
    () => ({ gameState, startGame }),
    [gameState, startGame]
  );

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
