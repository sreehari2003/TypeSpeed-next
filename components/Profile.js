import React, { useContext } from "react";
import InfoContext from "../context/ScoreContext";
import classes from "./styles/Profile.module.scss";
import Error from "next/error";
const Profile = () => {
  const context = useContext(InfoContext);
  const query = {
    name: context.data.displayName,
    email: context.data.email,
    UID: context.data.uid,
    image: context.data.photoURL,
  };
  return (
    <div className={classes.profile}>
      <div className={classes.box}>
        <h1>Profile</h1>
        <div className={classes.name}>
          <img src={query.image} alt={query.name} />
          <h2>name : {query.name}</h2>
          <h2>email: {query.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
