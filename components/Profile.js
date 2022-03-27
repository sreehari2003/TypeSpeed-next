import React, { useContext, useState, useEffect } from "react";
import InfoContext from "../context/ScoreContext";
import classes from "./styles/Profile.module.scss";
import axios from "axios";
import cookie from "js-cookie";
import Router, { useRouter } from "next/router";
const Profile = () => {
  const ctx = useContext(InfoContext);
  const router = useRouter();
  useEffect(() => {
    if (!ctx.login) {
      router.push(`/404`);
    }
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (ctx.login) {
      const getData = async () => {
        try {
          const id = cookie.get("id");
          const jwt = cookie.get("jwt");
          const url = `http://localhost:4000/api/users/${id}`;
          const res = await axios.get(url, {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          });
          setData(res.data.datas);
        } catch (e) {}
      };
      getData();
    }
  }, [ctx.login]);
  return (
    <div className={classes.profile}>
      <div className={classes.box}>
        <h1>Profile</h1>
        <div className={classes.name}>
          <img src={data.image} alt={data.name} />
          <h2>name : {data.name}</h2>
          <h2>email: {data.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
