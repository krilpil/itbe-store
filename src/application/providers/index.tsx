"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { persistor, store } from "@application/store";
import { PersistGate } from "redux-persist/integration/react";
import antdTheme from "../theme/ui/AntdTheme";
import GlobalStyle from "../theme/ui/GlobalStyles";
import theme from "../theme/ui/DefaultTheme";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ConfigProvider theme={antdTheme}>
            <GlobalStyle />
            {children}
          </ConfigProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
