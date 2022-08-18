import { TextParagraph } from "./styles";

const ChampionTextContent = () => {
  const content =
    "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target.";

  const championName = "Lux";

  const regex = new RegExp(championName, "g");

  const parsedContent = content.replace(
    regex,
    `<anti-cheat>cheat? 😳</anti-cheat>`
  );

  return <TextParagraph dangerouslySetInnerHTML={{ __html: parsedContent }} />;
};

export { ChampionTextContent };
