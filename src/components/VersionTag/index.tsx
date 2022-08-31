import { Container } from './styles';
import config from '../../../package.json';

const VersionTag = () => {
  return (
    <Container>
      <span>Version: {config.version}</span>
    </Container>
  );
};

export { VersionTag };
