import React, { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";
import InfoContext from "../context/ScoreContext";
import axios from "axios";
import Timer from "./Timer";
const Input = () => {
  const [tm, setTm] = useState(30);
  const context = useContext(InfoContext);
  const [dis, setDis] = useState(false);

  const [sentPost, setSentPost] = useState(false);
  const [id, setId] = useState(0);
  const query = {
    score: context.highScore,
  };

  useEffect(() => {
    if (context.login) {
      //getting the uuser id by looping through the DB
      context.cloudData.map((el) => {
        if (el.UID === context.data.uid) {
          setId(el._id);
        }
      });
    }
  }, [context.login]);

  const sentScore = async () => {
    try {
      //sending the put request when highScore changes
      const res = await axios.put(
        `https://typespeednext.herokuapp.com/api/users/${id}`,
        query,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      if (!res.ok) throw new Error("Couldn't send score'");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    //setting the highscore as ui after sending the get req
    const getS = async () => {
      if (context.login) {
        const sc = await axios.get(
          `https://typespeednext.herokuapp.com/api/users/${id}`
        );
        context.setHs(sc.score);
      }
    };
    getS();
  }, [context.login]);
  useEffect(() => {
    if (sentPost) {
      sentScore();
    }
  }, [sentPost]);

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
      setTimeout(() => {
        setTm(30);
        context.reStart();
        setDis(false);
        context.setInput("");
        setSentPost(false);
        //input go back to initial stage after 35s
      }, [5000]);
      context.changeKey("");
      setSentPost(true);
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
