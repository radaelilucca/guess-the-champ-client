import { useContext, useState } from 'react';
import { IoLogOut } from 'react-icons/io5';

import { withOutsideClickListener } from '~/HOCS';

import { Backdrop, CreateGameMenu as CreateGameMenuComponent, LoadingSplash } from '~/components';
import { APP_CONTENT } from '~/const';
import { useGameState } from '~/hooks';

import { AuthContext } from '../../context';
import {
  Container,
  CreateMenuContainer,
  DescriptionContainer,
  Footer,
  HeadlineContainer,
  PlayButton,
  PlayButtonContainer,
} from './styles';

const HomePage = () => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const { gameState } = useGameState();

  const { handleLogout } = useContext(AuthContext);

  const handlePlay = async () => {
    setIsCreateMenuOpen(true);

    // TODO: Create / Join logics will be moved.
    // try {
    //   await handleCreateMatch();
    //   navigate('/game');
    // } catch (error) {
    //   verbose.error({ id: 'Error on Match Creation', data: error });
    // }
  };

  const CreateGameMenu = withOutsideClickListener({
    Component: CreateGameMenuComponent,
    onClickOutside: () => setIsCreateMenuOpen(false),
  });

  return (
    <>
      {isCreateMenuOpen && (
        <CreateMenuContainer>
          <Backdrop />
          <CreateGameMenu />
        </CreateMenuContainer>
      )}
      <Container>
        <IoLogOut size={40} onClick={handleLogout} />
        <LoadingSplash isOpen={gameState.isLoading} />
        <HeadlineContainer>
          <img src='/images/logo.png' alt='Guess the Champion Logo' />

          <h1>{APP_CONTENT.title}</h1>
          <h5>{APP_CONTENT.blurb}</h5>
        </HeadlineContainer>

        <DescriptionContainer>
          <span>{APP_CONTENT.description}</span>
        </DescriptionContainer>

        <PlayButtonContainer>
          <PlayButton type='button' onClick={handlePlay}>
            play
          </PlayButton>
        </PlayButtonContainer>

        <Footer>
          {/* <address>
            Made with 💛 by{' '}
            <a href='https://www.linkedin.com/in/luccaradaeli' target='_blank' rel='noreferrer'>
              Lucca Radaeli!
            </a>
          </address> */}
          <span>* This is a fan made game! </span>
        </Footer>
      </Container>
    </>
  );
};

export { HomePage };
