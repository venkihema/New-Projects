import { useState } from "react";
import "./Interest.css";
export function InterestCalculator() {
  const [principle, setPrinciple] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState(0);
  const [total, setTotal] = useState(0);
  const principleHandler = (e) => {
    setPrinciple(e.target.value);
  };
  const termHandler = (e) => {
    setTerm(e.target.value);
  };
  const rateHandler = (e) => {
    setRate(e.target.value);
  };
  const calculate = () => {
    const interest = (principle * term * rate) / 100;
    const total = parseInt(principle) + parseInt(interest);
    setResult(interest);
    setTotal(total);
  };
  return (
    <div className="main">
      <div className="header">
        <div>
          <h4>Enter your Principle Amount</h4>
          <input
            type="text"
            value={principle}
            placeholder="Enter Your Amount"
            onChange={principleHandler}
          />
        </div>
        <div>
          <h4>Term Duration</h4>
          <input
            type="text"
            value={term}
            placeholder="Enter Term Duration"
            onChange={termHandler}
          />
        </div>
        <div>
          <h4>Rate Of Interest (%)</h4>
          <input
            type="text"
            value={rate}
            placeholder="Enter Rate of Interest"
            onChange={rateHandler}
          />
        </div>
      </div>
      <div className="calcButton">
        <button onClick={calculate}>Calculate</button>
      </div>
      <div>
        <h4> Interest Amount is: {result}</h4>
        <h4> Total Amount with Interest is: {total}</h4>
      </div>
    </div>
  );
}
