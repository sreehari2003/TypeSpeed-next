import React, { useContext } from "react";
import InfoContext from "../context/ScoreContext";
const rowO = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
];
const rowT = [
  "tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "|",
];
const Three = [
  "caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
];
const four = [
  "shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  ".",
  "/",
  "shift",
];
const five = ["ctrl", "fn", "🪟", "alt", "space", "alt", "fn", "ctrl"];

const KeyBoard = () => {
  const ctx = useContext(InfoContext);
  return (
    <div className="cover">
      <div className="keyboard">
        <ul className="row">
          {rowO.map((el, index) => {
            if (el === ctx.key) {
              return (
                <li className="active" key={index}>
                  {el}
                </li>
              );
            }
            return <li>{el}</li>;
          })}
        </ul>
        <ul className="row">
          {rowT.map((el, index) => {
            if (el === "tab") {
              return (
                <li className="onehalf" key={index}>
                  {el}
                </li>
              );
            } else if (el === "tab" && el === ctx.key) {
              return (
                <li className="onehalf active" key={index}>
                  {el}
                </li>
              );
            } else if (el === ctx.key) {
              return (
                <li className="active" key={index}>
                  {el}
                </li>
              );
            }
            return <li>{el}</li>;
          })}
        </ul>
        <ul className="row">
          {Three.map((el, index) => {
            if (el === ctx.key) {
              return (
                <li className="active" key={index}>
                  {el}
                </li>
              );
            }
            return <li>{el}</li>;
          })}
        </ul>
        <ul className="row">
          {four.map((el, index) => {
            if (el === ctx.key) {
              return (
                <li className="active" key={index}>
                  {el}
                </li>
              );
            }
            return <li>{el}</li>;
          })}
        </ul>
        <ul className="row">
          {five.map((el, index) => {
            if (el === "space") {
              return (
                <li key={index} style={{ flexGrow: 9 }} clasname="active">
                  {el}
                </li>
              );
            } else if (el === ctx.key) {
              {
                return (
                  <li key={index} className="active">
                    {el}
                  </li>
                );
              }
            }
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default KeyBoard;
