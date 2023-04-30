import { SHeader, SWrapper } from "@widgets/header/ui/header.styles";
import Menu from "@features/menu";

const Header = () => {
  return (
    <SWrapper>
      <SHeader>
        <Menu />
      </SHeader>
    </SWrapper>
  );
};

export default Header;
