import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.app-wrapper {
  


  height: 100%;
  width: 100%;
  display: flex;

  flex: 1;

  justify-content: center;
  align-items:center;

  font-family: ${(props) => props.theme.fontFamily.poppins}; 
  
  * {
      transition: all 150ms ease;
    }
  }

  *, 
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
  }

  body {
      font-size: 100%;
      list-style-type: none;
      
      height: 100%;
      width: 100%;
      flex: 1;

      background-color: ${(props) => props.theme.colors.darkBackground};

  }

  #root {
    height: 100vh;
    width: 100vw;

    display: flex;
  }
`;
