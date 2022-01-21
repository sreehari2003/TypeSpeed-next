import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import InfoContext from "../context/ScoreContext";
import Link from "next/link";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../auth/config/fire-baseconfig";
const Navbar = () => {
  const context = useContext(InfoContext);
  const [logs, setLog] = useState("Login");
  const auth = () => {
    //fiebase login code
    const provider = new GoogleAuthProvider();
    const getAuth = async () => {
      try {
        const res = await signInWithPopup(authentication, provider);
        context.upData(res);
        //console log need to remove
        console.log(res);
        setLog("Log Out");
        context.log();
        if (!res.ok) throw new Error("Couldn't sign'");
      } catch (e) {
        // alert("could not sign in");
        //CONSOLE
        console.log(e);
        //need to handele the error
      }
    };
    //login and logout with condition
    if (context.login) {
      //logout function
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
          LeaderBoards
        </Button>
        <Button size="large" className="btn">
          score : {context.score}
        </Button>
        {/* conditionol rendering */}
        {context.login && (
          <Button size="large" className="btn">
            <Link href="/profile">Profile</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
