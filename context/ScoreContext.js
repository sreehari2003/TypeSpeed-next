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
  const [data, setData] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [cloudData, setCloudData] = useState([]);
  const [uid, setUid] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [wordChange, setWordChange] = useState(false);

  const userrs = (val) => {
    setUserInfo(val);
  };
  const setID = (val) => {
    setUid(val);
  };
  const setHs = (val) => {
    setHighScore(val);
  };
  const upData = (el) => {
    setData(el);
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
  };
  const increaseIndex = () => {
    setIndex((index) => index + 1);
  };
  const setInput = (val) => {
    setWord(val);
  };
  const provider = {
    userrs,
    userInfo,
    uid,
    setID,
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
    setHs,
    highScore,
    setCloudData,
    cloudData,
    wordChange,
  };

  return (
    <InfoContext.Provider value={provider}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
