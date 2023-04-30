import { DefaultTheme } from "styled-components";
import { ScreenBreakpoints } from "@shared/lib";

const theme: DefaultTheme = {
  breakpoints: {
    maxMobile: ScreenBreakpoints.maxMobile,
    maxTablets: ScreenBreakpoints.maxTablets,
    maxLaptops: ScreenBreakpoints.maxLaptops,
    maxDesktops: ScreenBreakpoints.maxDesktops,
  },
};

export default theme;
