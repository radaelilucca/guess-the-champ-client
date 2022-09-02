import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { AES, enc } from 'crypto-js';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { guessTheChampApi } from '~/services';
import { gameStateAtom, userStateAtom } from '~/state';
import { MatchDataType } from '~/types';
import { verbose } from '~/utils';

const useGameState = () => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const setUserState = useSetRecoilState(userStateAtom);

  const handleGuess = async (championKey: string) => {
    try {
      const response = await guessTheChampApi.client.post(
        `/game/guess/${gameState.currentMatchData.id}`,
        {
          champion: championKey,
        },
      );

      const { isCorrect, matchScore } = response.data;

      const toastConfig = {
        closeOnClick: true,
        autoClose: 1000,
      };

      if (isCorrect) {
        toast.success('HIT!', toastConfig);

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
      setGameState((prev) => ({ ...prev, isLoading: true }));
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

  // TODO: FILTER PIXELADO NAS IMGS EM MODO HARD;
  //TODO: FOCUS INPUT
  // TODO: WORD LIST POR CHAMP NO MODO HARD;

  return {
    gameState,
    getAvailableChampions,
    handleCreateMatch,
    handleGuess,
  };
};

export { useGameState };
