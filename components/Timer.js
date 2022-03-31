import React, { useContext, useEffect } from "react";
import InfoContext from "../context/ScoreContext";
const Timer = ({ val, getVal }) => {
  const context = useContext(InfoContext);
  useEffect(() => {
    getVal(context.score);
  }, [context.score]);
  return (
    <div className="time">
      <div className="box">Time:{val}</div>
      <div className="box">Score : {context.score}</div>
    </div>
  );
};

export default Timer;
