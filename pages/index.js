import React, { useEffect, useContext } from "react";
import KeyBoard from "../components/KeyBoard";
import Input from "../components/Input";
import Modal from "../modal/Modal";
import Button from "@material-ui/core/Button";
import axios from "axios";
import InfoContext from "../context/ScoreContext";
import cookie from "js-cookie";
const Index = () => {
  const context = useContext(InfoContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/users/${cookie.get("id")}`,
          {
            headers: {
              authorization: `Bearer ${cookie.get("jwt")}`,
            },
          }
        );
        context.high(res.data.datas.score);
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
      <Modal>
        <h2>RULES</h2>
        <div className="modalBox">
          <ul className="md">
            <li>you have 30 seconds to type</li>
            <li>Time starts when you focus on input field</li>
            <li>you need to be logged in to save the changes</li>
            <li>highest possible score is 40</li>
          </ul>
          <h3>All The Best!</h3>
        </div>
        <div className="d">
          <Button size="large" className="btn btnOk">
            OK
          </Button>
        </div>
      </Modal>
      <Input />
      <KeyBoard />
    </>
  );
};

export default Index;
