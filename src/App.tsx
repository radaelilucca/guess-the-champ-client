import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { PagesRoutes } from './Routes';
import { GlobalStyles } from './styles';
import { mainTheme } from './styles/themes';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from './context';
import { VersionTag } from './components';

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
