import { ChampionDataType } from "../champions";

export const guessingModesMap = {
  abilityImage: "ability-image",
  abilityDescription: "ability-description",
  blurb: "blurb",
  passiveImage: "passive-image",
  passiveDescription: "passive-description",
};

export type CleanChampionSpellType = {
  id: string;
  name: string;
  description: string;
  imageSRC: string;
};

export type GameStateType = {
  currentChampion: ChampionDataType;
  guessingMode: keyof typeof guessingModesMap;
  totalGuesses: number;
  score: number;
  isLoading: boolean;
  randomSpell: CleanChampionSpellType;
  passive: CleanChampionSpellType;
};

export type GameContextType = {
  gameState: GameStateType;
  startGame: () => void;
};
