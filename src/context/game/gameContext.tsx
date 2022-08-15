import { createContext, useContext, useMemo, useState } from "react";
import { getRandomNumberInRange, getRandomQuestion } from "../../utils";
import {
  ChampionDataType,
  ChampionsContext,
  ChampionsContextType,
} from "../champions";
import {
  CleanChampionSpellType,
  GameContextType,
  GameStateType,
  GuessingModeType,
} from "./game.types";

const GameContext = createContext<GameContextType | null>(null);

const PASSIVE_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/passive";
const SPELL_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/spell";

const guessingModes: GuessingModeType[] = [
  {
    name: "ability",
    subMode: "image",
  },
  {
    name: "ability",
    subMode: "description",
  },
  {
    name: "passive",
    subMode: "image",
  },
  {
    name: "passive",
    subMode: "description",
  },
  {
    name: "blurb",
    subMode: "description",
  },
];

interface IGameProviderProps {
  children: React.ReactNode;
}

const GameProvider = ({ children }: IGameProviderProps) => {
  const [gameState, setGameState] = useState<GameStateType>({
    isLoading: true,
  } as GameStateType);

  const [fetching, setFetching] = useState(false);

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

    const guessingMode: GuessingModeType =
      guessingModes[
        getRandomNumberInRange({ min: 0, max: guessingModes.length - 1 })
      ];

    if (randomChampionData) {
      const skillIndex = getRandomNumberInRange({
        min: 0,
        max: randomChampionData.spells.length - 1,
      });

      const { name, description, id, image } =
        randomChampionData?.spells[skillIndex || 0];

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

      const question = getRandomQuestion(guessingMode.name);

      const newGameState = {
        currentChampion: randomChampionData,
        guessingMode,
        totalGuesses: 0,
        score: 0,
        isLoading: false,
        randomSpell,
        passive,
        question,
      };
      setGameState(newGameState);
    }
  };

  const values = useMemo(
    () => ({ gameState, startGame }),
    [gameState, startGame]
  );

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
