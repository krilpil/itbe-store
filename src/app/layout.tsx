import { PropsWithChildren } from "react";

// TODO: Сделать шрифт INTER

import Providers from "@application/providers";
import Layout from "@widgets/layout";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="ru">
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Providers>
  );
}
