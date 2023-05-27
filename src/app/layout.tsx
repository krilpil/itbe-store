import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import Providers from "@application/providers";
import Layout from "@widgets/layout";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="ru">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Providers>
  );
}
