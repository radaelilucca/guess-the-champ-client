import { emotes } from "../const";
import { getRandomNumberInRange } from "./randomNumberInRange";

const getRandomEmoteImage = () => {
  const randomIndex = getRandomNumberInRange({ min: 0, max: emotes.length });

  const emoteName = emotes[randomIndex];

  const baseSRC = "emotes/EMOTENAME.webp";

  const emoteSRC = baseSRC.replace(/EMOTENAME/, emoteName);

  return { name: emoteName, src: emoteSRC };
};

export { getRandomEmoteImage };
