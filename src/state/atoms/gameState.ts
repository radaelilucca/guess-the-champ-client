import { atom } from 'recoil';

import { MatchDataType } from '~/types';
import { ChampionListItem } from '~/types/shared/championListItem.type';

export type ChampionOptionType = {
  label: string;
  value: string;
};

type GameStateType = {
  isLoading: boolean;
  availableChampions: ChampionListItem[];
  currentMatchData: MatchDataType | null;
  selectedChampion?: ChampionOptionType | null;
  missedChampions: string[];
};

const gameStateAtom = atom({
  key: 'gameState',
  default: {
    isLoading: true,
    availableChampions: [],
    currentMatchData: null,
    selectedChampion: null,
    missedChampions: [],
  } as GameStateType,
});

export { gameStateAtom };
