import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
import axios from "axios";
import Timer from "./Timer";
import cookie from "js-cookie";
const Input = () => {
  const [tm, setTm] = useState(30);
  const context = useContext(InfoContext);
  const [dis, setDis] = useState(false);
  const [temp, setTemp] = useState(0);
  const [sent, setSent] = useState(false);

  const getVal = (val) => {
    setTemp(val);
  };
  useEffect(() => {
    if (sent) {
      const sen = async () => {
        await sentScore();
      };
      sen();
    }
  }, [sent]);

  const sentScore = async () => {
    try {
      const obj = {
        // score: ,
        score: temp,
      };
      console.log(obj);
      //sending the patch request when highScore changes
      // const url = `https://typespeednext.herokuapp.com/api/users/${cookie.get(
      //   "id"
      // )}`;
      const url = `http://127.0.0.1:4000/api/users/${cookie.get("id")}`;
      const res = await axios.patch(url, obj, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          authorization: `Bearer ${cookie.get("jwt")}`,
        },
      });
      if (!res.ok || res.status === "error") {
        console.log(e);
        throw new Error(res.data.message);
      }
      context.setHigh(res.data.data.score);
      console.log(res.data.message);
    } catch (e) {}
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
    console.log(temp, "from focus");
    tms = setInterval(() => {
      setTm((val) => val - 1);
      //reducing the timer after everry one second
    }, [1000]);
    setTimeout(() => {
      setDis(true);
      clearInterval(tms);
      setTimeout(async () => {
        // await sentScore();
        setSent(true);
        setTm(30);
        context.reStart();

        setDis(false);
        context.setInput("");

        //input go back to initial stage after 35s
        setSent(false);
      }, [5000]);
      context.changeKey("");

      //30 s as the timer
    }, [15000 * 2]);
  };
  return (
    <div>
      <Text />
      <Timer val={tm} getVal={getVal} />
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
