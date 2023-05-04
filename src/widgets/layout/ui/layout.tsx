import { PropsWithChildren } from "react";
import Menu from "@features/menu";
import useDevice from "@shared/lib/hooks/useDevice";
import { SFooter, SLogo, SContent, SWrapper, SMain } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  const { isTablets } = useDevice();

  return (
    <SWrapper>
      <SLogo>ITBE.STORE</SLogo>
      <SContent>
        {isTablets || <Menu />}
        <SMain>{children}</SMain>
      </SContent>
      <SFooter>Created by Bespalov K.</SFooter>
    </SWrapper>
  );
};

export default Layout;
