import { ReactNode } from "react";

import Providers from "@application/providers";
import Layout from "@widgets/layout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Providers>
  );
}
