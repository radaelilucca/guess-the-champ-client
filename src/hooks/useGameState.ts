import { AES, enc } from "crypto-js";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";
import { guessTheChampApi } from "../services";
import { gameStateAtom, userStateAtom } from "../state";
import { MatchDataType } from "../types";

const useGameState = () => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const setUserState = useSetRecoilState(userStateAtom);

  const navigate = useNavigate();

  const handleLoading = (state: boolean) =>
    setGameState((prev) => ({ ...prev, isLoading: state }));

  const handleGuess = async (championKey: string) => {
    try {
      const response = await guessTheChampApi.client.post(
        `/game/guess/${gameState.currentMatchData.id}`,
        {
          champion: championKey,
        }
      );

      const { isCorrect, matchScore } = response.data;

      if (isCorrect) {
        toast.success("HIT!", {
          closeOnClick: true,
          autoClose: 1000,
          onClose: () => navigate("/"),
        });

        setUserState((prev) => ({
          ...prev,
          scores: {
            ...prev.scores,
            total: prev.scores.total + Number(matchScore),
          },
        }));
      } else toast.error("Miss 😢");
    } catch (error) {
      console.error(error);
      toast.error("Error on submit");
    }
  };

  const handleCreateMatch = async () => {
    try {
      setGameState((prev) => ({ ...prev, isLoading: true }));
      const response = await guessTheChampApi.client.get("/game/create");

      const { matchData: encryptedMatchData, matchId } = response.data;

      const key = import.meta.env.VITE_CRYPTO_KEY;

      const bytes = AES.decrypt(encryptedMatchData, key);

      const decryptedData = JSON.parse(
        bytes.toString(enc.Utf8)
      ) as MatchDataType;

      setGameState((prev) => ({
        ...prev,
        currentMatchData: { ...decryptedData, id: matchId },
        isLoading: false,
      }));
    } catch (error) {
      setGameState((prev) => ({ ...prev, isLoading: false }));

      console.error("Error on game creation");
      toast.error("Error on game creation. :/");
    }
  };

  const getAvailableChampions = async () => {
    handleLoading(true);

    try {
      const response = await guessTheChampApi.client.get("/champs");

      const availableChampions = response.data.champions;

      setGameState((prev) => ({
        ...prev,
        availableChampions,
        isLoading: false,
      }));
    } catch (error) {
      console.error("ERROR ON GET AVAILABLE CHAMPS!");
      setGameState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

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
