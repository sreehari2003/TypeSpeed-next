import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
const Input = () => {
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
  const focus = () => {
    setTimeout(() => {
      setDis(true);
      setTimeout(() => {
        context.reStart();
        setDis(false);
      }, [5000]);
    }, [15000]);
  };
  return (
    <div>
      <Text />
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
