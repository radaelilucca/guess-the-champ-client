import { IoLogOut, IoReloadCircle } from 'react-icons/io5';
import { Navigate, useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { ChampionTextContent, LoadingSplash } from '~/components';
import { useAntiCheat, useGameState } from '~/hooks';
import { ChampionOptionType, userStateAtom } from '~/state';

import {
  ChampContentContainer,
  ChampionSelect,
  Container,
  Question,
  QuitButton,
  ReloadButton,
  SelectContainer,
  UserInfoContainer,
} from './styles';

// interface IScoreItemProps {
//   label: string;
//   enabledStars: number;
//   hits: number;
// }

// const ScoreItem = ({ label, hits, enabledStars }: IScoreItemProps) => {
//   const enabled = 'icons/star-icon.svg';
//   const disabled = 'icons/disabled-star-icon.svg';

//   const stars = Array(3)
//     .fill('')
//     .map((_, index) => (index + 1 <= enabledStars ? enabled : disabled))
//     .reverse();

//   return (
//     <ScoreItemContainer>
//       <div className='texts'>
//         <strong>{label}</strong>
//         <span>{hits} hits</span>
//       </div>
//       <div className='start-icons-container'>
//         {stars.map((src, index) => (
//           <img key={`${src}-${index}`} src={src} alt='score star icon' />
//         ))}
//       </div>
//     </ScoreItemContainer>
//   );
// };

const UserInfo = () => {
  const { username, scores, isGuest } = useRecoilValue(userStateAtom);
  return (
    <UserInfoContainer>
      <span>user: {username}</span>
      {!isGuest && (
        <span>
          total score: <strong>{scores.total}</strong>
        </span>
      )}
    </UserInfoContainer>
  );
};

const GamePage = () => {
  const { gameState, handleGuess, handleCreateMatch, championsOptions } = useGameState();

  const { currentMatchData, isLoading } = gameState;

  const { cheatsAttempts, maxAttempts } = useAntiCheat();

  const navigate = useNavigate();

  const handleQuit = () => navigate('/');

  const handleChampionSelect = (champion: ChampionOptionType) => {
    handleGuess(champion);
  };

  const handleNewMatch = () => handleCreateMatch();

  const renderChampionContent = () => {
    let textContent = '';
    let imageSRC = '';

    if (!currentMatchData) return null;

    if (isLoading) return null;

    const { guessingMode, champion, passive, randomAbility } = currentMatchData;

    switch (guessingMode.name) {
      case 'ability':
        textContent = randomAbility.description;
        imageSRC = randomAbility.imageSRC;

        break;

      case 'passive':
        textContent = passive.description;
        imageSRC = passive.imageSRC;
        break;

      case 'blurb':
        textContent = champion.descriptions.blurb;
        break;

      default:
        break;
    }

    return (
      <ChampContentContainer>
        {guessingMode.subMode === 'description' && (
          <ChampionTextContent content={textContent} championName={champion.name} />
        )}
        {guessingMode.subMode === 'image' && <img src={imageSRC} alt='champion spell' />}
      </ChampContentContainer>
    );
  };

  if (cheatsAttempts >= maxAttempts) return <Navigate to='/' />;
  if (!currentMatchData) return <Navigate to='/' />;

  return (
    <Container>
      <LoadingSplash isOpen={isLoading} />
      <QuitButton type='button' onClick={handleQuit}>
        <IoLogOut />
      </QuitButton>

      <UserInfo />

      <Question>{currentMatchData.question}</Question>

      {renderChampionContent()}

      <SelectContainer>
        <ChampionSelect
          options={championsOptions}
          className='champ-select'
          classNamePrefix='champ-select'
          onChange={(newValue) => handleChampionSelect(newValue as ChampionOptionType)}
          value={gameState.selectedChampion}
          placeholder='Type or select a champion'
        />
        <ReloadButton onClick={handleNewMatch}>
          <IoReloadCircle />
        </ReloadButton>
      </SelectContainer>

      {/* <ScoresContainer>
        <h5>Your scores:</h5>

        <ScoresList>
          <ScoreItem label="First try:" hits={99} enabledStars={3} />
          <ScoreItem label="Second try:" hits={120} enabledStars={2} />
          <ScoreItem label="Third try:" hits={41} enabledStars={1} />

          <strong className="failures">Total failures: 3</strong>
        </ScoresList>
      </ScoresContainer> */}
    </Container>
  );
};

export { GamePage };
