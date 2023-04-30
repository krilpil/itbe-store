import Menu from "@features/menu";
import { SHeader, SWrapper } from "./header.styles";

const Index = () => {
  return (
    <SWrapper>
      <SHeader>
        <Menu />
      </SHeader>
    </SWrapper>
  );
};

export default Index;
