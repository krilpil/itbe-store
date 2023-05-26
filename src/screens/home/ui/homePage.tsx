"use client";

import { SHome, STitle } from "@screens/home/ui/homePage.styles";
import Search from "@widgets/search";

const HomePage = () => {
  return (
    <SHome>
      <STitle>Найди всю одежду, обувь и аксессуары здесь!</STitle>
      <Search />
    </SHome>
  );
};

export default HomePage;
