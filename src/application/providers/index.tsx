"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import antdTheme from "../theme/ui/AntdTheme";
import GlobalStyle from "../theme/ui/GlobalStyles";
import theme from "../theme/ui/DefaultTheme";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ConfigProvider theme={antdTheme}>
          <GlobalStyle />
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
