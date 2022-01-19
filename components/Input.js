import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Navbar from "./Navbar";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
const Input = () => {
  const context = useContext(InfoContext);
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
  return (
    <div>
      <Navbar />
      <Text />
      <div className="field">
        <TextField
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
