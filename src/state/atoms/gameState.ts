import { atom } from 'recoil';

import { MatchDataType } from '~/types';
import { ChampionListItem } from '~/types/shared/championListItem.type';

type GameStateType = {
  isLoading: boolean;
  availableChampions: ChampionListItem[];
  currentMatchData: MatchDataType;
};

const gameStateAtom = atom({
  key: 'gameState',
  default: {} as GameStateType,
});

export { gameStateAtom };
