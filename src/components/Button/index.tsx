import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<any> {
  children: ReactNode;
  className?: string;
}

const Button = ({ className, children, ...props }: IButtonProps) => {
  return (
    <Container className={className} type='button' {...props}>
      {children}
    </Container>
  );
};

export { Button };
