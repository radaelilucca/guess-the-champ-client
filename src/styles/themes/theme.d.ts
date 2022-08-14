// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      darkBackground: string;
      darkText: string;
      lightText: string;
    };
    fontFamily: {
      poppins: string;
    };

    rounded: {
      circle: "50%";
      sm: "0.2rem";
      md: "0.4rem";
      lg: "0.6rem";
      xl: "1rem";
    };
  }
}
