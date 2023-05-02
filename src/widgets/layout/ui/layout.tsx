import { PropsWithChildren } from "react";
import Menu from "@features/menu";
import { SFooter, SLogo, SContent, SWrapper, SMain } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SWrapper>
      <SLogo>ITBE.STORE</SLogo>
      <SContent>
        <Menu />
        <SMain>{children}</SMain>
      </SContent>
      <SFooter>Created by Bespalov K.</SFooter>
    </SWrapper>
  );
};

export default Layout;
