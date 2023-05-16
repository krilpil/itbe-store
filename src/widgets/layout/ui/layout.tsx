"use client";

import { PropsWithChildren } from "react";
import { SFooter, SLogo, SContent, SWrapper } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SWrapper>
      <SLogo>ITBE.STORE</SLogo>
      <SContent>{children}</SContent>
      <SFooter>Created by Bespalov K.</SFooter>
    </SWrapper>
  );
};

export default Layout;
