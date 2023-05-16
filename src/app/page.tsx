import { Metadata } from "next";
import Home from "@screens/home";
import Menu from "@features/menu";

const HomePage = () => {
  return (
    <>
      <Menu />
      <Home />
    </>
  );
};

export const metadata: Metadata = {
  title: "Главная — ITBE.STORE",
};

export default HomePage;
