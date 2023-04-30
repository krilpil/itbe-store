import Head from "next/head";
import Home from "@screens/home";
import Layout from "@widgets/layout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Главная - ITBE</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
