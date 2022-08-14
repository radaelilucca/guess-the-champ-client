import { Container, Footer, HeadlineContainer, PlayButton } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <HeadlineContainer>
        <img src="/images/lol-logo.png" />

        <h1>Hue Who is</h1>
        <h5>A League of Legends guessing game!</h5>
      </HeadlineContainer>

      <span className="description">
        Guess who is the champion according to their skills or synopsis.
      </span>

      <PlayButton to="/game">Play</PlayButton>

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
