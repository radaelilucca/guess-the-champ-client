import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { AES, enc } from 'crypto-js';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { guessTheChampApi } from '~/services';
import { ChampionOptionType, gameStateAtom, userStateAtom } from '~/state';
import { MatchDataType } from '~/types';
import { verbose } from '~/utils';

const useGameState = () => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const setUserState = useSetRecoilState(userStateAtom);

  const championsOptions = gameState.availableChampions
    .filter(({ key }) => !gameState.missedChampions.includes(key))
    .map(({ name, key }) => ({
      value: key,
      label: name,
    }));

  const handleGuess = async (champion: ChampionOptionType) => {
    setGameState((prev) => ({
      ...prev,
      selectedChampion: champion,
      missedChampions: [...prev.missedChampions, champion.value],
    }));

    try {
      if (!gameState.currentMatchData) throw new Error('Missing match data');

      const response = await guessTheChampApi.client.post(
        `/game/guess/${gameState.currentMatchData.id}`,
        {
          champion: champion.label,
        },
      );

      const { isCorrect, matchScore } = response.data;

      const toastConfig = {
        closeOnClick: true,
        autoClose: 1000,
      };

      if (isCorrect) {
        toast.success('HIT!', { ...toastConfig, onClose: () => handleCreateMatch() });

        setUserState((prev) => ({
          ...prev,
          scores: {
            ...prev.scores,
            total: prev.scores.total + Number(matchScore),
          },
        }));
      } else toast.error('Miss 😢', toastConfig);
    } catch (error) {
      verbose.error({ id: 'Error on Guess request', data: error });
      toast.error('Error on submit');
    }
  };

  const handleCreateMatch = async () => {
    try {
      setGameState((prev) => ({
        ...prev,
        isLoading: true,
        selectedChampion: null,
        missedChampions: [],
      }));

      const response = await guessTheChampApi.client.get('/game/create');

      const { matchData: encryptedMatchData, matchId } = response.data;

      const key = import.meta.env.VITE_CRYPTO_KEY;

      const bytes = AES.decrypt(encryptedMatchData, key);

      const decryptedData = JSON.parse(bytes.toString(enc.Utf8)) as MatchDataType;

      setGameState((prev) => ({
        ...prev,
        currentMatchData: { ...decryptedData, id: matchId },
        isLoading: false,
      }));
    } catch (error) {
      setGameState((prev) => ({ ...prev, isLoading: false }));

      verbose.error({ id: 'Error on create match request', data: error });

      toast.error('Error on game creation. :/');
    }
  };

  const getAvailableChampions = useCallback(async () => {
    setGameState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await guessTheChampApi.client.get('/champs');

      const availableChampions = response.data.champions;

      setGameState((prev) => ({
        ...prev,
        availableChampions,
        isLoading: false,
      }));
    } catch (error) {
      verbose.error({ id: 'Error on Get Champions request', data: error });

      setGameState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, [setGameState]);

  return {
    gameState,
    getAvailableChampions,
    handleCreateMatch,
    handleGuess,
    championsOptions,
  };
};

export { useGameState };
