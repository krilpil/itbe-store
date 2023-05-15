"use client";

import { SHome, STitle } from "@screens/home/ui/home.styles";
import Search from "@widgets/search";

const Home = () => {
  return (
    <SHome>
      <STitle>Найди всю одежду, обувь и аксессуары здесь!</STitle>
      <Search />
    </SHome>
  );
};

export default Home;
