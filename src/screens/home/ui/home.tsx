import Search from "@features/search";
import { SHome, STitle } from "@screens/home/ui/home.styles";
import AdvancedFilters from "@features/advancedFilters";

// TODO: Увеличить шрифт
const Home = () => {
  return (
    <SHome>
      <STitle>Найди всю одежду, обувь и аксессуары здесь!</STitle>
      <Search />
      <AdvancedFilters />
    </SHome>
  );
};

export default Home;
