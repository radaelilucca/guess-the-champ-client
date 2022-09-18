import { forwardRef, useState } from 'react';
import { IoPersonSharp, IoPeopleSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

import type { PlayersModesType } from '~/types';

import {
  CreateButton,
  JoinButton,
  JoinConfigsContainer,
  JoinContainer,
  MatchCodeInput,
  MenuContainer,
} from './styles';
import { ToggleContainer, Toggle, Cover, ToggleSlot } from './stylesToggle';

interface IPlayersModeToggleProps {
  value: PlayersModesType;
  toggleValue: (newValue: PlayersModesType) => void;
}
const PlayersModeToggle = ({ value, toggleValue }: IPlayersModeToggleProps) => {
  const handleToggle = () => {
    const newValue = value === 'single-player' ? 'multiplayer' : 'single-player';
    toggleValue(newValue);
  };

  return (
    <ToggleContainer>
      <span>{value.replace('-', ' ')}</span>
      <Toggle value={value} onClick={handleToggle}>
        <ToggleSlot>
          <IoPersonSharp />
        </ToggleSlot>

        <ToggleSlot>
          <IoPeopleSharp />
        </ToggleSlot>

        <Cover value={value} />
      </Toggle>
    </ToggleContainer>
  );
};

const CreateGameMenuComponent = (props, ref) => {
  const [playersMode, setPlayersMode] = useState<PlayersModesType>('single-player');
  const [matchCode, setMatchCode] = useState('');

  const handleJoinGame = () => {
    toast(`SHOULD JOIN GAME => ${matchCode}`);
  };

  const handleCreate = () => {
    toast(`SHOULD CREATE A NEW GAME`);
  };

  return (
    <MenuContainer ref={ref}>
      <h5>create new game</h5>

      <PlayersModeToggle value={playersMode} toggleValue={setPlayersMode} />
      <CreateButton onClick={handleCreate}>create</CreateButton>

      {playersMode === 'multiplayer' && (
        <JoinConfigsContainer>
          <h5>join a game</h5>

          <JoinContainer>
            <MatchCodeInput
              label='match code'
              value={matchCode}
              onChange={(newValue) => setMatchCode(newValue)}
            />

            <JoinButton onClick={handleJoinGame}>join</JoinButton>
          </JoinContainer>
        </JoinConfigsContainer>
      )}
    </MenuContainer>
  );
};

export const CreateGameMenu = forwardRef(CreateGameMenuComponent);
