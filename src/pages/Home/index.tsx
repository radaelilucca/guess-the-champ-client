import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSplash } from "../../components";

import { useGameState } from "../../hooks";

import {
  Container,
  DescriptionContainer,
  Footer,
  HeadlineContainer,
  PlayButton,
  PlayButtonContainer,
} from "./styles";

const HomePage = () => {
  const { gameState, handleCreateMatch } = useGameState();

  const navigate = useNavigate();

  const handlePlay = async () => {
    try {
      await handleCreateMatch();
      navigate("/game");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <LoadingSplash isOpen={gameState.isLoading} />
      <HeadlineContainer>
        <img src="/images/lol-logo.png" />

        <h1>Hue Who is</h1>
        <h5>A League of Legends guessing game!</h5>
      </HeadlineContainer>

      <DescriptionContainer>
        <span>
          Guess who is the champion according to their skills or synopsis.
        </span>
      </DescriptionContainer>

      <PlayButtonContainer>
        <PlayButton type="button" onClick={handlePlay}>
          play
        </PlayButton>
      </PlayButtonContainer>

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
