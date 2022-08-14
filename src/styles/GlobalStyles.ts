import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.app-wrapper {
  background-color: ${(props) => props.theme.colors.darkBackground};


  height: 100vh;
  width: 100vw;

  display: flex;

  justify-content: center;
  align-items:center;

  font-family: ${(props) => props.theme.fontFamily.poppins}; 
  
  * {
    transition: all 150ms ease;
    }
  }
`;
