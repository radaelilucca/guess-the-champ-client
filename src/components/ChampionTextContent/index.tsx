import { TextParagraph } from "./styles";

interface IChampionTextContentProps {
  content: string;
  championName: string;
}

const ChampionTextContent = ({
  content,
  championName,
}: IChampionTextContentProps) => {
  const regex = new RegExp(championName, "g");

  const parsedContent = content.replace(
    regex,
    `<anti-cheat>cheat? 😳</anti-cheat>`
  );

  return <TextParagraph dangerouslySetInnerHTML={{ __html: parsedContent }} />;
};

export { ChampionTextContent };
