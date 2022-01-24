import React, { useState, useContext, useEffect } from "react";
import { Dummey } from "./Dummey";
import InfoContext from "../context/ScoreContext";
import axios from "axios";
const Text = () => {
  const context = useContext(InfoContext);
  const [texts, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    // const word = await axios.get("http://localhost:4000/api/text");
    const word = await fetch("https://typespeednext.herokuapp.com/api/text");
    const datass = await word.json();
    console.log(datass);
    setText(datass.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [context.wordChange]);
  const w = texts.toString().toLowerCase().split(" ");
  console.log(w);
  const text = w;
  const val = context.index;
  const input = context.word;
  useEffect(() => {
    if (text[val] === input) {
      context.ScoreIncrease();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [val, input]);

  if (loading) {
    return (
      <div className="text-box">
        <div className="flex">
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }

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
