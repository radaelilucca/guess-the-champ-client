import { getRandomEmoteImage } from '~/utils';

import { Container, Spinner, LoadingText, EmoteImage } from './styles';

interface ILoadingSplash {
  loadingText?: string;
  isOpen?: boolean;
}
const LoadingSplash = ({ loadingText = 'Loading...', isOpen }: ILoadingSplash) => {
  const randomEmote = getRandomEmoteImage();

  if (!isOpen) return null;

  return (
    <Container>
      <Spinner />
      <EmoteImage src={randomEmote.src} alt={`${randomEmote.name} emote`} />

      <LoadingText>{loadingText}</LoadingText>
    </Container>
  );
};

export { LoadingSplash };
