import React from "react";
import { useState } from "react";

const InfoContext = React.createContext({
  ScoreIncrease: () => {},
  increaseIndex: () => {},
  setInput: () => {},
  changeKey: () => {},
  word: "",
  key: "",
});

export const InfoContextProvider = (props) => {
  const [score, setScore] = useState(0);
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState("");

  const changeKey = (val) => {
    setKey(val);
  };

  const ScoreIncrease = () => {
    setScore((score) => score + 1);
  };
  const increaseIndex = () => {
    setIndex((index) => index + 1);
  };
  const setInput = (val) => {
    setWord(val);
  };
  const provider = {
    score,
    setInput,
    ScoreIncrease,
    increaseIndex,
    word,
    index,
    changeKey,
    key,
  };

  return (
    <InfoContext.Provider value={provider}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
