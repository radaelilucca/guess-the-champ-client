import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { RecoilRoot } from 'recoil';

import { VersionTag } from '~/components';
import { AuthProvider } from '~/context';
import { GlobalStyles, mainTheme } from '~/styles';

import { PagesRoutes } from './Routes';

function App() {
  return (
    <RecoilRoot>
      <ToastContainer
        position='bottom-center'
        pauseOnHover={false}
        autoClose={2200}
        theme='dark'
        newestOnTop
        toastStyle={{
          backgroundColor: mainTheme.colors.primary,
          color: mainTheme.colors.darkText,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
        }}
        progressStyle={{ backgroundColor: mainTheme.colors.darkText }}
      />
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />

        <div className='app-wrapper'>
          <VersionTag />
          <AuthProvider>
            <PagesRoutes />
          </AuthProvider>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export { App };
