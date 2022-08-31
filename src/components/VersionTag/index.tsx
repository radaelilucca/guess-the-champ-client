import { version } from '~/../package.json';

import { Container } from './styles';

const VersionTag = () => {
  return (
    <Container>
      <span>Version: {version}</span>
    </Container>
  );
};

export { VersionTag };
