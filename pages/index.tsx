import Head from "next/head";
import CarBrowser from "../components/CarBrowserSection/CarBrowser";
import HeroSection from "../components/HeroSection/HeroSection";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <Navigation />
      <HeroSection />
      <CarBrowser />
    </>
  );
}
