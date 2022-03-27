import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InfoContext from "../context/ScoreContext";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../auth/config/fire-baseconfig";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import cookie from "js-cookie";

const Navbar = () => {
  useEffect(() => {
    if (cookie.get("id") && cookie.get("jwt")) {
      setLog("logOut");
    }
  }, []);

  const context = useContext(InfoContext);
  const [logs, setLog] = useState("Login");

  const sendData = async (query) => {
    try {
      const res = await fetch("https://typespeednext.herokuapp.com/api/users", {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) return false;
      cookie.set("id", data.data.user._id);
      cookie.set("jwt", data.token);
      return true;
    } catch (e) {}
  };

  const auth = () => {
    //fiebase login code
    const provider = new GoogleAuthProvider();

    const getAuth = async () => {
      try {
        const res = await signInWithPopup(authentication, provider);
        const data = res.user;
        const query = {
          name: data.displayName,
          email: data.email,
          UID: data.uid,
          image: data.photoURL,
        };
        //sending post req return a boolean
        const bool = await sendData(query);
        if (!res.user.emailVerified) throw new Error("Couldn't sign in");
        if (!bool) throw new Error("Couldn't sign in");
        setLog("Log Out");
        context.log(true);
      } catch (e) {
        // alert("could not sign in");
        //CONSOLE
        alert(e);
      }
    };

    //login and logout with condition
    if (context.login) {
      //logout function
      cookie.remove("id");
      cookie.remove("jwt");
      context.log(false);
      setLog("LogIn");
    } else {
      //login function
      getAuth();
    }
  };
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
          Highscore : {context.highscore}
        </Button>
        {/* conditionol rendering */}
        {context.login && (
          <Button size="large" className="btn">
            <Link href="/profile">Profile</Link>
          </Button>
        )}
        <a
          href="https://github.com/sreehari2003/TypeSpeed-next"
          target="_blank"
        >
          <Button size="large" className="btn git">
            <BsGithub />
          </Button>
        </a>
        <Button size="large" className="btn last">
          <AiOutlineMenu />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
