"use client";

import { PropsWithChildren } from "react";
import Header from "@widgets/header";
import Providers from "@application/providers";
import { SFooter, SContent, SWrapper } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <SWrapper>
        <Header />
        <SContent>{children}</SContent>
        <SFooter>Created by Bespalov K.</SFooter>
      </SWrapper>
    </Providers>
  );
};

export default Layout;
