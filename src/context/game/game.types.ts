import { ChampionDataType } from "../champions";

export type GuessingModeNamesType = "ability" | "blurb" | "passive";

export type GuessingSubModeNamesType = "image" | "description";

export type GuessingModeType = {
  name: GuessingModeNamesType;
  subMode: GuessingSubModeNamesType;
};

export type CleanChampionSpellType = {
  id: string;
  name: string;
  description: string;
  imageSRC: string;
};

export type GameStateType = {
  currentChampion: ChampionDataType;
  guessingMode: GuessingModeType;
  totalGuesses: number;
  score: number;
  randomSpell: CleanChampionSpellType;
  passive: CleanChampionSpellType;
  question: string;
  inProgress: boolean;
};

export type GameContextType = {
  gameState: GameStateType;
  startGame: () => void;
  isLoading: boolean;
};
