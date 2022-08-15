import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSplash } from "../../components";
import { GameContextType } from "../../context/game/game.types";
import { GameContext } from "../../context/game/gameContext";
import { Container, Footer, HeadlineContainer, PlayButton } from "./styles";

const HomePage = () => {
  const { startGame, isLoading } = useContext(GameContext) as GameContextType;

  const navigate = useNavigate();

  const handlePlay = async () => {
    await startGame();
    navigate("/game");
  };

  return (
    <Container>
      <LoadingSplash isOpen={isLoading} />
      <HeadlineContainer>
        <img src="/images/lol-logo.png" />

        <h1>Hue Who is</h1>
        <h5>A League of Legends guessing game!</h5>
      </HeadlineContainer>

      <span className="description">
        Guess who is the champion according to their skills or synopsis.
      </span>

      <PlayButton type="button" onClick={handlePlay}>
        Play
      </PlayButton>

      <Footer>
        <address>
          Made with 💛 by{" "}
          <a href="https://www.linkedin.com/in/luccaradaeli" target="_blank">
            Lucca Radaeli!
          </a>
        </address>
      </Footer>
    </Container>
  );
};

export { HomePage };
