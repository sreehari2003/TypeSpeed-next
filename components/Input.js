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
      context.cloudData.map((el) => {
        if (el.UID === context.data.uid) {
          setId(el._id);
        }
      });
    }
  }, [context.login]);

  const sentScore = async () => {
    try {
      const res = await axios.put(
        `https://typespeednext.herokuapp.com/api/users/${id}`,
        // `http://localhost:4000/api/users/61ed3c92df38ab6d06f7a3e1`,
        query,
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      if (!res.ok) throw new Error("Couldn't send score'");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
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
        setTm(30);
        context.reStart();
        // setDis(false);
        context.setInput("");
        setTimeout(() => {
          setSentPost(false);
        }, [1000 * 10]);
      }, [5000]);
      context.changeKey("");
      setSentPost(true);
    }, [15000 * 0.5]);
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
