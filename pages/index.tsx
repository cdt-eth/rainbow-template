import type { NextPage } from "next";
import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <ConnectButton />

        <h1 className="text-3xl font-bold">
          <code>Hello world!</code>
        </h1>
      </main>
    </div>
  );
};

export default Home;
