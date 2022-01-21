import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
import Timer from "./Timer";
const Input = () => {
  const [tm, setTm] = useState(16);
  const context = useContext(InfoContext);
  const [dis, setDis] = useState(false);
  const getInput = (e) => {
    if (e.target.value.endsWith(" ")) {
      context.increaseIndex();
      context.setInput("");
    } else {
      context.setInput(e.target.value);
    }
  };
  const getKey = (e) => {
    context.changeKey(e.key);
  };
  let tms;
  const focus = () => {
    tms = setInterval(() => {
      setTm((val) => val - 1);
    }, [1000]);
    setTimeout(() => {
      setDis(true);
      clearInterval(tms);
      setTimeout(() => {
        setTm(16);
        context.reStart();
        setDis(false);
        context.setInput("");
      }, [5000]);
    }, [16000]);
  };
  return (
    <div>
      <Text />
      <Timer val={tm} />
      <div className="field">
        <TextField
          disabled={dis}
          onFocus={focus}
          onKeyDown={getKey}
          value={context.word}
          onChange={getInput}
          className="bar"
          id="outlined-basic"
          label="Enter the words"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Input;
