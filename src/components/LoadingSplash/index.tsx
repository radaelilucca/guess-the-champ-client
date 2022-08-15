import { getRandomEmoteImage } from "../../utils";
import { Container, Spinner, LoadingText, EmoteImage } from "./styles";

interface ILoadingSplash {
  loadingText?: string;
  isOpen: boolean;
}
const LoadingSplash = ({
  loadingText = "Loading...",
  isOpen,
}: ILoadingSplash) => {
  const randomEmoteSRC = getRandomEmoteImage();

  if (!isOpen) return null;

  return (
    <Container>
      <Spinner />
      <EmoteImage src={randomEmoteSRC} alt="Soraka Emote" />

      <LoadingText>{loadingText}</LoadingText>
    </Container>
  );
};

export { LoadingSplash };
