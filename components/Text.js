import React, { useState, useContext, useEffect } from "react";
import InfoContext from "../context/ScoreContext";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
const Text = () => {
  const context = useContext(InfoContext);
  const [texts, setText] = useState(" ");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    // const url = "https://typespeednext.herokuapp.com/api/text";
    const url = "http://127.0.0.1:4000/api/text";
    const word = await fetch(url);
    const datass = await word.json();
    setText(datass.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
    // context.change(0);
  }, []);
  const w = texts.toLowerCase().split(" ");
  const text = w;
  const val = context.index;
  const input = context.word;
  useEffect(() => {
    if (text[val] === input && !loading) {
      context.ScoreIncrease();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  if (loading) {
    return (
      <div className="flex load">
        <CircularProgress />
        <h4>Loading...</h4>
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
