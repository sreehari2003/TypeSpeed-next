import React from "react";
import { useState, useEffect } from "react";
import cookie from "js-cookie";
import axios from "axios";

//context data
const InfoContext = React.createContext({
  ScoreIncrease: () => {},
  increaseIndex: () => {},
  setInput: () => {},
  changeKey: () => {},
  log: () => {},
  upData: () => {},
  reStart: () => {},
  setHs: () => {},
  setCloudData: () => {},
  setUid: () => {},
  uid: "",
  cloudData: [],
  highScore: 0,
  score: 0,
  data: [],
  word: "",
  key: "",
  login: false,
});

export const InfoContextProvider = (props) => {
  const [score, setScore] = useState(-1);
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState("");
  const [login, setLogin] = useState(false);
  const [wordChange, setWordChange] = useState(false);
  const [highscore, setHs] = useState(0);
  const [md, showMd] = useState(false);

  useEffect(() => {
    const id = cookie.get("id");
    const jwt = cookie.get("jwt");
    if (jwt && id) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  // const change = (value) => {
  //   setScore(value);
  // };
  const high = (val) => {
    setHs(val);
    console.log("highscore updated");
  };

  const log = (bool) => {
    setLogin(bool);
  };
  const changeKey = (val) => {
    setKey(val);
    setTimeout(() => {
      setKey("");
    }, [500]);
  };

  const ScoreIncrease = () => {
    setScore((score) => score + 1);
  };
  const reStart = () => {
    setIndex(0);
    setScore(0);
    setWordChange(!wordChange);
    console.log("reset function called");
  };
  const increaseIndex = () => {
    setIndex((index) => index + 1);
  };
  const setInput = (val) => {
    setWord(val);
  };
  const changeMd = () => {
    showMd((el) => !el);
  };

  const provider = {
    changeMd,
    reStart,
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
    wordChange,
    high,
    highscore,
    md,
  };

  return (
    <InfoContext.Provider value={provider}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
