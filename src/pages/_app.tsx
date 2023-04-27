import type { AppProps } from "next/app";
import GlobalStyle from "@app/theme/ui/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
