import { gameQuestions } from "../const";
import { GuessingModeNamesType } from "../context/game/game.types";
import { getRandomNumberInRange } from "./randomNumberInRange";

const getRandomQuestion = (guessingMode: GuessingModeNamesType) => {
  const randomIndex = getRandomNumberInRange({
    min: 0,
    max: gameQuestions.length,
  });

  const question = gameQuestions[randomIndex];
  const parsedText = question.replace(/REPLACE/, guessingMode);

  return parsedText;
};

export { getRandomQuestion };
