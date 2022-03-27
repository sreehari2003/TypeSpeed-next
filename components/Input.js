import React, { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
import axios from "axios";
import Timer from "./Timer";
import cookie from "js-cookie";
const Input = () => {
  const [tm, setTm] = useState(30);
  const context = useContext(InfoContext);
  const [dis, setDis] = useState(false);

  const sentScore = async () => {
    try {
      const obj = {
        // score: context.score,
        score: context.score,
      };
      //sending the patch request when highScore changes
      const res = await axios.patch(
        `https://typespeednext.herokuapp.com/api/users/${cookie.get("id")}`,
        obj,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization: `Bearer ${cookie.get("jwt")}`,
          },
        }
      );
      console.log(res.data);
      if (!res.ok) throw new Error(res.data.message);
      context.high(res.data.data.score);
      console.log(res.data.message);
    } catch (e) {
      console.log(e);
    }
  };
  const getInput = (e) => {
    const val = e.target.value.toLowerCase();
    if (val.endsWith(" ")) {
      context.increaseIndex();
      context.setInput("");
    } else {
      context.setInput(val);
    }
  };
  const getKey = (e) => {
    context.changeKey(e.key);
  };
  let tms;

  const focus = () => {
    tms = setInterval(() => {
      setTm((val) => val - 1);
      //reducing the timer after everry one second
    }, [1000]);
    setTimeout(() => {
      setDis(true);
      clearInterval(tms);
      setTimeout(async () => {
        // sentScore();
        context.high(context.score);
        await sentScore();
        setTm(30);
        context.reStart();

        setDis(false);
        context.setInput("");
        //input go back to initial stage after 35s
      }, [5000]);
      context.changeKey("");
      //30 s as the timer
    }, [15000 * 2]);
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
