import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<{}> {
  children: ReactNode;
  className?: string;
}
const Button = ({ className, children, ...props }: IButtonProps) => {
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  );
};

export { Button };
