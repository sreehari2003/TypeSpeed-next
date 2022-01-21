import React from "react";

const KeyBoard = () => {
  return (
    <div className="cover">
      <div className="keyboard">
        <ul className="row">
          <li data-key="op">`</li>
          <li data-key="1">1</li>
          <li data-key="2">2</li>
          <li data-key="3">3</li>
          <li data-key="4">4</li>
          <li data-key="5">5</li>
          <li data-key="6">6</li>
          <li data-key="7">7</li>
          <li data-key="8">8</li>
          <li data-key="9">9</li>
          <li data-key="10">0</li>
          <li data-key="-">-</li>
          <li data-key="=">=</li>
          <li data-key="back">BACK</li>
        </ul>
        <ul className="row">
          <li className="onehalf" data-key="tab">
            TAB
          </li>
          <li data-key="Q">Q</li>
          <li data-key="W">W</li>
          <li data-key="E">E</li>
          <li data-key="R">R</li>
          <li data-key="T">T</li>
          <li data-key="Y">Y</li>
          <li data-key="U">U</li>
          <li data-key="I">I</li>
          <li data-key="O">O</li>
          <li data-key="P">P</li>
          <li data-key="bracket">[</li>
          <li data-key="bracket">]</li>
          <li data-key="slash">\</li>
        </ul>
        <ul className="row">
          <li className="onehalf" data-key="caps">
            CAPS
          </li>
          <li data-key="A">A</li>
          <li data-key="S">S</li>
          <li data-key="D">D</li>
          <li data-key="F">F</li>
          <li data-key="G">G</li>
          <li data-key="H">H</li>
          <li data-key="J">J</li>
          <li data-key="K">K</li>
          <li data-key="L">L</li>
          <li data-key=":">:</li>
          <li data-key="'">{"'"}</li>
          <li data-key="enter">ENTER</li>
        </ul>
        <ul className="row">
          <li data-key="left-shift" className="twohalf">
            SHIFT
          </li>
          <li data-key="Z">Z</li>
          <li data-key="X">X</li>
          <li data-key="C">C</li>
          <li data-key="V">V</li>
          <li data-key="B">B</li>
          <li data-key="N">N</li>
          <li data-key="M">M</li>
          <li data-key="coma"> ,</li>
          <li data-key="fullStop">.</li>
          <li data-key="coma">?</li>
          <li data-key="shift">SHIFT</li>
        </ul>
        <ul className="row">
          <li data-key="ctrl" className="twohalf">
            ctrl
          </li>
          <li data-key="fn">fn</li>
          <li data-key="windows">🪟</li>
          <li data-key="alt">alt</li>
          <li data-key="space" className="space" style={{ flexGrow: 9 }}>
            space
          </li>
          <li data-key="alt">alt</li>
          <li data-key="fn">fn</li>
          <li data-key="ctrl">ctrl</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyBoard;
