import React from "react";
import { useState } from "react";

//context data
const InfoContext = React.createContext({
  ScoreIncrease: () => {},
  increaseIndex: () => {},
  setInput: () => {},
  changeKey: () => {},
  log: () => {},
  upData: () => {},
  reStart: () => {},
  data: [],
  word: "",
  key: "",
  login: false,
});

export const InfoContextProvider = (props) => {
  const [score, setScore] = useState(0);
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState("");
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);

  const upData = (el) => {
    setData(el);
  };
  const log = () => {
    setLogin(true);
  };
  const changeKey = (val) => {
    setKey(val);
  };

  const ScoreIncrease = () => {
    setScore((score) => score + 1);
  };
  const reStart = () => {
    setIndex(0);
    setScore(0);
  };
  const increaseIndex = () => {
    setIndex((index) => index + 1);
  };
  const setInput = (val) => {
    setWord(val);
  };
  const provider = {
    reStart,
    data,
    upData,
    score,
    setInput,
    ScoreIncrease,
    increaseIndex,
    word,
    index,
    changeKey,
    key,
    log,
    login,
  };

  return (
    <InfoContext.Provider value={provider}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
