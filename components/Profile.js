import React, { useContext } from "react";
import InfoContext from "../context/ScoreContext";
import classes from "./styles/Profile.module.scss";
const Profile = () => {
  const ctx = useContext(InfoContext);
  const dt = ctx.data;
  return (
    <div className={classes.profile}>
      <div className={classes.box}>
        <h1>Profile</h1>
        <div className={classes.name}>
          <img src={dt.user.photoURL} alt={dt.user.displayName} />
          <h2>name : {dt.user.displayName}</h2>
          <h2>email: {dt.user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
