"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/ui/GlobalStyles";
import theme from "../theme/ui/DefaultTheme";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
