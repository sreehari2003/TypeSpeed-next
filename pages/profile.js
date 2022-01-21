import React from "react";
import Profile from "../components/Profile";
import Head from "next/head";

const profile = () => {
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
