import { DefaultTheme } from "styled-components";
import { ScreenBreakpoints } from "@shared/lib";

const theme: DefaultTheme = {
  breakpoints: {
    maxMobile: ScreenBreakpoints.maxMobile,
    maxTablets: ScreenBreakpoints.maxTablets,
    maxLaptops: ScreenBreakpoints.maxLaptops,
    maxDesktops: ScreenBreakpoints.maxDesktops,
  },
  colors: {
    middleGray: "rgba(5, 5, 5, 0.06)",
    lightGray: "#f4f2f0",
    white: "#ffffff",
  },
};

export default theme;
