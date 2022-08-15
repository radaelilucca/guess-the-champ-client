import { createContext, useContext, useMemo, useState } from "react";
import { PASSIVE_BASE_URL, SPELL_BASE_URL } from "../../const/urls";
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

const guessingModes: GuessingModeType[] = [
  {
    name: "ability",
    subMode: "image",
  },
  // {
  //   name: "ability",
  //   subMode: "description",
  // },
  {
    name: "passive",
    subMode: "image",
  },
  // {
  //   name: "passive",
  //   subMode: "description",
  // },
  // {
  //   name: "blurb",
  //   subMode: "description",
  // },
];

interface IGameProviderProps {
  children: React.ReactNode;
}

const GameProvider = ({ children }: IGameProviderProps) => {
  const [gameState, setGameState] = useState<GameStateType>({
    inProgress: false,
  } as GameStateType);

  const [isLoading, setIsLoading] = useState(false);

  const { getRandomChampionId, getChampionData } = useContext(
    ChampionsContext
  ) as ChampionsContextType;

  const startGame = async () => {
    setIsLoading(true);

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
        randomSpell,
        passive,
        question,
        inProgress: true,
      };
      setGameState(newGameState);
      setIsLoading(false);
    }
  };

  const values = useMemo(
    () => ({ gameState, startGame, isLoading }),
    [gameState, startGame]
  );

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
