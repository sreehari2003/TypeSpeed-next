import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InfoContext from "../context/ScoreContext";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../auth/config/fire-baseconfig";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const context = useContext(InfoContext);
  const [logs, setLog] = useState("Login");
  const auth = () => {
    //fiebase login code
    const provider = new GoogleAuthProvider();
    const getAuth = async () => {
      try {
        const res = await signInWithPopup(authentication, provider);
        context.upData(res.user);
        setLog("Log Out");
        context.log(true);
        if (!res.ok) throw new Error("Couldn't sign'");
      } catch (e) {
        // alert("could not sign in");
        //CONSOLE
      }
    };

    //login and logout with condition
    if (context.login) {
      //logout function
      context.log(false);
      setLog("LogIn");
    } else {
      //login function
      getAuth();
    }
  };
  //  ding the post req

  useEffect(() => {
    if (context.login) {
      const sendData = async () => {
        const query = {
          name: context.data.displayName,
          email: context.data.email,
          UID: context.data.uid,
          image: context.data.photoURL,
          score: context.highScore,
        };
        try {
          await fetch("https://typespeednext.herokuapp.com/api/users", {
            method: "POST",
            body: JSON.stringify(query),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (e) {}
      };
      sendData();
    }
  }, [context.login]);
  return (
    <div className="nav">
      <Link href="/">
        <h1>TypeTest</h1>
      </Link>
      <div>
        <Button size="large" className="btn" onClick={auth}>
          {logs}
        </Button>
        <Button size="large" className="btn">
          <Link href="/leaderboards">LeaderBoards</Link>
        </Button>
        <Button size="large" className="btn">
          Highscore : {context.highScore}
        </Button>
        {/* conditionol rendering */}
        {context.login && (
          <Button size="large" className="btn">
            <Link href="/profile">Profile</Link>
          </Button>
        )}
        <Button size="large" className="btn">
          <AiOutlineMenu />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
