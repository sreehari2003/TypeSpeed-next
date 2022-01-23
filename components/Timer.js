import React, { useContext } from "react";
import InfoContext from "../context/ScoreContext";
const Timer = ({ val }) => {
  const context = useContext(InfoContext);

  return (
    <div className="time">
      <div className="box">Time:{val}</div>
      <div className="box">Score : {context.score}</div>
    </div>
  );
};

export default Timer;
