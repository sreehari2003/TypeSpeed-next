import React, { useEffect, useContext } from "react";
import Profile from "../components/Profile";
import Head from "next/head";
import InfoContext from "../context/ScoreContext";
import { useRouter } from "next/router";
const profile = () => {
  const router = useRouter();
  const ctx = useContext(InfoContext);
  useEffect(() => {
    if (ctx.login) {
    } else {
      router.push("/");
    }
  }, [ctx.login]);

  if (!ctx.login) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile />;
    </>
  );
};

export default profile;
