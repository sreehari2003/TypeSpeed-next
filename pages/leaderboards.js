import React from "react";
import classes from "../styles/leader.module.scss";
const leaderboards = ({ data }) => {
  console.log(data);
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
              {data.map((el, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.score}</td>
                  <td>
                    <img src={el.image} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default leaderboards;

export const getStaticProps = async () => {
  const res = await fetch("https://typespeednext.herokuapp.com/api/users");
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};
