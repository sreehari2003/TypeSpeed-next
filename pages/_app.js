import "../styles/globals.scss";
import Head from "next/head";
import { InfoContextProvider } from "../context/ScoreContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InfoContextProvider>
        <Head>
          <title>TypeTest</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </InfoContextProvider>
    </>
  );
}

export default MyApp;
