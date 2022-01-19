import React, { useState, useContext, useEffect } from "react";
import { Dummey } from "./Dummey";
import InfoContext from "../context/ScoreContext";
const Text = () => {
  const text = Dummey();
  const context = useContext(InfoContext);
  const val = context.index;
  const input = context.word;
  useEffect(() => {
    if (text[val] === input) {
      context.ScoreIncrease();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val, input]);

  return (
    <div className="text-box">
      {text.slice(0, 40).map((el, index) => {
        if (val === index) {
          return (
            <b key={index} className="text text-active">
              {el}{" "}
            </b>
          );
        }
        return (
          <p key={index} className="text">
            {el}
          </p>
        );
      })}
    </div>
  );
};

export default Text;
