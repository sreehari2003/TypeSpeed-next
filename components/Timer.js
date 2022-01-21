import React from "react";

const Timer = ({ val }) => {
  return (
    <div className="time">
      <div className="box">{val}</div>
    </div>
  );
};

export default Timer;
