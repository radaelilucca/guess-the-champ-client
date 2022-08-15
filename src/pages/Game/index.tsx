import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  ChampionsContext,
  ChampionsContextType,
} from "../../context/champions";

import { GameContextType } from "../../context/game/game.types";
import { GameContext } from "../../context/game/gameContext";

import {
  ChampContentContainer,
  ChampionSelect,
  ClueButton,
  Container,
  Question,
  ScoreItemContainer,
  ScoresContainer,
  ScoresList,
} from "./styles";

interface IScoreItemProps {
  label: string;
  enabledStars: number;
  hits: number;
}
const ScoreItem = ({ label, hits, enabledStars }: IScoreItemProps) => {
  const enabled = "icons/star-icon.svg";
  const disabled = "icons/disabled-star-icon.svg";

  const stars = Array(3)
    .fill("")
    .map((_, index) => (index + 1 <= enabledStars ? enabled : disabled))
    .reverse();

  return (
    <ScoreItemContainer>
      <div className="texts">
        <strong>{label}</strong>
        <span>{hits} hits</span>
      </div>
      <div className="start-icons-container">
        {stars.map((src, index) => (
          <img key={`${src}-${index}`} src={src} />
        ))}
      </div>
    </ScoreItemContainer>
  );
};

const GameView = () => {
  const { gameState } = useContext(GameContext) as GameContextType;
  const { champions } = useContext(ChampionsContext) as ChampionsContextType;

  useEffect(() => {
    console.log({ gameState });
  }, []);

  const championsOptions = champions.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const renderChampionContent = () => {
    let textContent = "";
    let imageSRC = "";

    const { guessingMode } = gameState;

    switch (guessingMode.name) {
      case "ability":
        textContent = gameState.randomSpell.description;
        imageSRC = gameState.randomSpell.imageSRC;

        break;

      case "passive":
        textContent = gameState.passive.description;
        imageSRC = gameState.passive.imageSRC;
        break;

      case "blurb":
        textContent = gameState.currentChampion.blurb;

      default:
        break;
    }

    return (
      <ChampContentContainer>
        {guessingMode.subMode === "description" && <span>{textContent}</span>}
        {guessingMode.subMode === "image" && (
          <img src={imageSRC} alt="champion spell" />
        )}
      </ChampContentContainer>
    );
  };

  if (!gameState.inProgress) return <Navigate to="/" />;

  return (
    <Container>
      <ClueButton type="button" disabled>
        <img src="/icons/tip-icon.svg" />
      </ClueButton>

      <Question>{gameState.question}</Question>

      {renderChampionContent()}

      <ChampionSelect
        options={championsOptions}
        className="champ-select"
        classNamePrefix="champ-select"
      />

      {/* <ScoresContainer>
        <h5>Your scores:</h5>

        <ScoresList>
          <ScoreItem label="First try:" hits={99} enabledStars={3} />
          <ScoreItem label="Second try:" hits={120} enabledStars={2} />
          <ScoreItem label="Third try:" hits={41} enabledStars={1} />

          <strong className="failures">Total failures: 3</strong>
        </ScoresList>
      </ScoresContainer> */}
    </Container>
  );
};

export { GameView };
