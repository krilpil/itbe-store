"use client";

import { PropsWithChildren } from "react";
import Header from "@widgets/header";
import { SFooter, SContent, SWrapper } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SWrapper>
      <Header />
      <SContent>{children}</SContent>
      <SFooter>Created by Bespalov K.</SFooter>
    </SWrapper>
  );
};

export default Layout;
