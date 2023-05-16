import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      maxMobile: number;
      maxTablets: number;
      maxLaptops: number;
      maxDesktops: number;
    };
    colors: {
      middleGray: string;
      lightGray: string;
      white: string;
    };
  }
}
