import React, { useEffect, useState } from "react";
import classes from "./modal.module.scss";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
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
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

const Modal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  const onClose = () => {
    setMounted(false);
  };
  const Var = (
    <Backdrop onClose={onClose}>
      <ModalOverlay>{children}</ModalOverlay>
    </Backdrop>
  );
  return mounted ? createPortal(Var, document.getElementById("portals")) : null;
};

export default Modal;
