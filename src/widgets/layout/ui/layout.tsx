import { PropsWithChildren } from "react";
import Header from "./header";
import { SMain, SWrapper } from "./layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <SWrapper>
        <SMain>{children}</SMain>
      </SWrapper>
    </>
  );
};

export default Layout;
