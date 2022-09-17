// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      darkBackground: string;
      darkText: string;
      lightText: string;
      black: string;
      white: string;
    };
    fontFamily: {
      poppins: string;
    };

    rounded: {
      circle: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
