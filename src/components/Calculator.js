import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("error");
    }
  };
  return (
    <div className="container">
      <div className="output">
        <form className="input">
          <input type="text" className="input-area" value={result}></input>
        </form>
      </div>
      <div className="btn-container">
        <button onClick={clear} className="btn" id="clear">
          Clear
        </button>
        <button onClick={backspace} className="btn" id="back">
          x
        </button>

        <button name="%" onClick={handleClick} className="btn" id="div">
          %
        </button>
        <button name="7" onClick={handleClick} className="btn">
          7
        </button>
        <button name="8" onClick={handleClick} className="btn">
          8
        </button>
        <button name="9" onClick={handleClick} className="btn">
          9
        </button>
        <button name="*" onClick={handleClick} className="btn" id="mul">
          *
        </button>
        <button name="4" onClick={handleClick} className="btn">
          4
        </button>
        <button name="5" onClick={handleClick} className="btn">
          5
        </button>
        <button name="6" onClick={handleClick} className="btn">
          6
        </button>
        <button name="-" onClick={handleClick} className="btn" id="sub">
          -
        </button>
        <button name="1" onClick={handleClick} className="btn">
          1
        </button>
        <button name="2" onClick={handleClick} className="btn">
          2
        </button>
        <button name="3" onClick={handleClick} className="btn">
          3
        </button>
        <button name="+" onClick={handleClick} className="btn" id="add">
          +
        </button>
        <button name="0" onClick={handleClick} className="btn">
          0
        </button>
        <button name="." onClick={handleClick} className="btn" id="dot">
          .
        </button>

        <button onClick={calculate} className="btn" id="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
