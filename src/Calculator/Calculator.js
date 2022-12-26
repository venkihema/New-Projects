import { useState } from "react";
import "./Calculator.css";
export function Calculator() {
  const [input, setInput] = useState("");
  const resultHandler = () => {
    const result = eval(input);
    setInput(result);
  };
  const clearInput = () => {
    setInput("");
  };
  const cutInputOnebyOne = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div className="calculator">
      <div className="input">
        <input
          className="inputfield"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className="btnLayout">
        <div className="topLayout">
          <button className="clearbtn" onClick={clearInput}>
            Clear
          </button>
          <button className="cutbtn" onClick={cutInputOnebyOne}>
            C
          </button>
        </div>

        <button name="1" onClick={(e) => setInput(input + e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => setInput(input + e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => setInput(input + e.target.name)}>
          3
        </button>
        <button name="+" onClick={(e) => setInput(input + e.target.name)}>
          +
        </button>
        <button name="4" onClick={(e) => setInput(input + e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => setInput(input + e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => setInput(input + e.target.name)}>
          6
        </button>
        <button name="" onClick={(e) => setInput(input + e.target.name)}>
          -
        </button>
        <button name="7" onClick={(e) => setInput(input + e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => setInput(input + e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => setInput(input + e.target.name)}>
          9
        </button>
        <button name="*" onClick={(e) => setInput(input + e.target.name)}>
          *
        </button>
        <button name="0" onClick={(e) => setInput(input + e.target.name)}>
          0
        </button>
        <button name="=" onClick={resultHandler}>
          =
        </button>
        <button name="/" onClick={(e) => setInput(input + e.target.name)}>
          /
        </button>
      </div>
    </div>
  );
}
