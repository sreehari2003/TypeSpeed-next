import "../styles/globals.scss";
import Head from "next/head";
import { InfoContextProvider } from "../context/ScoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InfoContextProvider>
        <Head>
          <title>TypeTest</title>
        </Head>
        <Component {...pageProps} />
      </InfoContextProvider>
    </>
  );
}

export default MyApp;
