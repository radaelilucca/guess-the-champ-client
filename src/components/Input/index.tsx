import { InputHTMLAttributes, useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { Container, InputElement, Label, ToggleVisibilityButton, TopContainer } from './styles';

interface IInputProps extends InputHTMLAttributes<any> {
  label?: string;
  onChange: (newValue: any) => void;
  className?: string;
}

const Input = ({ label, onChange, className, ...props }: IInputProps) => {
  const [visibility, setVisibility] = useState(false);

  const handleToggleVisibility = () => {
    setVisibility((prev) => !prev);
  };

  const getInputType = () => {
    if (props.type !== 'password') return props.type;

    return visibility ? 'text' : 'password';
  };

  return (
    <Container className={className}>
      <TopContainer>
        {label && <Label>{label}</Label>}
        {props.type === 'password' && (
          <ToggleVisibilityButton type='button' onClick={handleToggleVisibility}>
            {visibility ? <MdVisibilityOff /> : <MdVisibility />}
          </ToggleVisibilityButton>
        )}
      </TopContainer>
      <InputElement {...props} type={getInputType()} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
};

export { Input };
