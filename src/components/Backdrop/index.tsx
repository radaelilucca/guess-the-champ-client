import { Container } from './styles';
import { IBackdropProps } from './types';

const Backdrop = ({ opacity }: IBackdropProps) => {
  return <Container opacity={opacity} />;
};

export { Backdrop };
