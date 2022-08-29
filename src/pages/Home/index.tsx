import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingSplash } from "../../components";
import { APP_CONTENT } from "../../const";

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
        <img src="/images/logo.png" />

        <h1>{APP_CONTENT.title}</h1>
        <h5>{APP_CONTENT.blurb}</h5>
      </HeadlineContainer>

      <DescriptionContainer>
        <span>{APP_CONTENT.description}</span>
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
        <span>* This is a fan made game! </span>
      </Footer>
    </Container>
  );
};

export { HomePage };
