import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { guessTheChampApi } from "../services";
import { gameStateAtom } from "../state";

const useGameState = () => {
  const [gameState, setGameState] = useRecoilState(gameStateAtom);

  const navigate = useNavigate();

  const handleLoading = (state: boolean) =>
    setGameState((prev) => ({ ...prev, isLoading: state }));

  const handleGuess = (championKey: string) => {
    if (championKey === gameState.currentMatchData.champion.key) {
      toast.success("HIT!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else toast.error("Miss 😢");
  };

  const handleCreateMatch = async () => {
    try {
      setGameState((prev) => ({ ...prev, isLoading: true }));
      const response = await guessTheChampApi.get("/game/create");

      const { game } = response.data;

      setGameState((prev) => ({
        ...prev,
        currentMatchData: game,
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
    const response = await guessTheChampApi.get("/champs");

    const availableChampions = response.data.champions;

    setGameState((prev) => ({ ...prev, availableChampions, isLoading: false }));
  };

  useEffect(() => {
    getAvailableChampions();
  }, []);

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
