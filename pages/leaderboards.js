import React, { useEffect, useState } from "react";
import Image from "next/image";
import classes from "../styles/leader.module.scss";

const leaderboards = () => {
  const [dt, setDt] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const callDb = async () => {
      try {
        const url = "https://api-typespeed.onrender.com/api/users";
        // const url = "http://127.0.0.1:4000/api/users";
        setLoad(true);
        const res = await fetch(url);
        const data = await res.json();
        setDt(data.data);
        setLoad(false);
        if (!res.ok) {
          console.log("Error loading");
          throw new Error();
        }
      } catch (e) {
        console.log(e);
      }
    };
    callDb();
  }, []);
  if (load) {
    return (
      <div className={classes.leader}>
        <h1>LeaderBoards</h1>
        <div className={classes.leaderbox}>
          <div className={classes.stats}>
            <h3>LOADING.....</h3>
          </div>
        </div>
      </div>
    );
  } else {
    let arr = dt.sort((a, b) => {
      return b.score - a.score;
    });
    return (
      <div className={classes.leader}>
        <h1>LeaderBoards</h1>
        <div className={classes.leaderbox}>
          <div className={classes.stats}>
            <table>
              <tbody>
                <tr>
                  <th>Ranking</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Profile</th>
                </tr>
                {arr.map((el, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.score}</td>
                    <td>
                      <Image src={el.image} width="100px" height="100px" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // return
};

export default leaderboards;
