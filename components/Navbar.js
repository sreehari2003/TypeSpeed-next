import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import InfoContextProvider from "../context/ScoreContext";
import Link from "next/link";

const Navbar = () => {
  const context = useContext(InfoContextProvider);
  return (
    <div className="nav">
      <h1>TypeTest</h1>
      <div>
        <Button size="large" className="btn">
          Login
        </Button>
        <Button size="large" className="btn">
          LeaderBoards
        </Button>
        <Button size="large" className="btn">
          score : {context.score}
        </Button>
        <Button size="large" className="btn">
          <Link href="/profile">Profile</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
