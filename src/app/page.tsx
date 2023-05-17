import { Metadata } from "next";
import Home from "@screens/home";

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export const metadata: Metadata = {
  title: "Главная — ITBE.STORE",
};

export default HomePage;
