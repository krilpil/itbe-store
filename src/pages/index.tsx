import Head from "next/head";
import Home from "@screens/home";
import Header from "@widgets/header";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
};

export default HomePage;
