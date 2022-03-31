import React, { useEffect, useContext } from "react";
import KeyBoard from "../components/KeyBoard";
import Input from "../components/Input";
import Modal from "../model/Modal";

import axios from "axios";
import InfoContext from "../context/ScoreContext";
import cookie from "js-cookie";
const Index = () => {
  const context = useContext(InfoContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const url = `https://typespeednext.herokuapp.com/api/users/${cookie.get(
          "id"
        )}`;
        // const url = `http://127.0.0.1:4000/api/users/${cookie.get("id")}`;
        const res = await axios.get(url, {
          headers: {
            authorization: `Bearer ${cookie.get("jwt")}`,
          },
        });
        context.setHigh(res.data.datas.score, "updated from index js");
      } catch (e) {
        console.log(e);
      }
    };
    if (context.login) {
      getData();
    }
  }, [context.login]);

  return (
    <>
      {context.md && <Modal />}
      <Input />
      <KeyBoard />
    </>
  );
};

export default Index;
