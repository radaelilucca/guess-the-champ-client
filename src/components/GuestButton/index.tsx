import { useContext } from 'react';

import { AuthContext } from '~/context';

import { IButtonProps } from '../Button';
import { CustomButton } from './styles';

type IGuestButtonProps = Partial<IButtonProps>;

const GuestButton = ({ className, ...props }: IGuestButtonProps) => {
  const { handleLoginAsGuest } = useContext(AuthContext);

  return (
    <CustomButton {...props} className={className} onClick={handleLoginAsGuest}>
      Play as guest
    </CustomButton>
  );
};

export { GuestButton };
