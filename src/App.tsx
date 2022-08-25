import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { PagesRoutes } from "./Routes";
import { GlobalStyles } from "./styles";
import { mainTheme } from "./styles/themes";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <ToastContainer
          position="bottom-center"
          pauseOnHover={false}
          autoClose={2200}
          theme="dark"
          newestOnTop
          toastStyle={{
            backgroundColor: mainTheme.colors.primary,
            color: mainTheme.colors.darkText,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
          }}
          progressStyle={{ backgroundColor: mainTheme.colors.darkText }}
        />
        <div className="app-wrapper">
          <PagesRoutes />
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export { App };
