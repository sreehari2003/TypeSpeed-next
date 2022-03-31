import React, { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import classes from "./modal.module.scss";
import { createPortal } from "react-dom";
import ScoreContext from "../context/ScoreContext";
const Backdrop = (props) => {
  const ctx = useContext(ScoreContext);
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.md}>
      <div className={classes.modal}>
        <div className={classes.content}>
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
        </div>
      </div>
    </div>
  );
};

const Modal = ({ children }) => {
  const ctx = useContext(ScoreContext);
  // const [mounted, setMounted] = useState(false);
  const { md, fun } = ctx;
  useEffect(() => {
    // setMounted(true);
    fun(true);
    return () => {
      // setMounted(false);
      fun(false);
    };
  }, []);
  const onClose = () => {
    fun(false);
  };
  const Var = (
    <Backdrop onClose={onClose}>
      <ModalOverlay>{children}</ModalOverlay>
    </Backdrop>
  );
  return md ? createPortal(Var, document.getElementById("portals")) : null;
};

export default Modal;
