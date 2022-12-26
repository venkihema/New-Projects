import { useState } from "react";
import { Input } from "../Components/Input/Input";
import "./Interest.css";
export function InterestCalculator() {
  const [principle, setPrinciple] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isCalculateClicked, setIsCalculateClicked] = useState(false);

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
    setIsCalculateClicked(true);
    if (principle === "" || term === "" || rate === "") {
      setTotal("Fields Required");
      setInterest("Fields Required");
    } else {
      const interest = (principle * term * rate) / 100;
      const total = parseInt(principle) + parseInt(interest);
      setInterest(interest);
      setTotal(total);
    }
  };

  return (
    <div className="main">
      <div className="header">
        <Input
          value={principle}
          error={isCalculateClicked && principle === ""}
          placeholder={"Enter Principle"}
          title="Principle Amount"
          errorMessage="Principle Required"
          onChange={principleHandler}
        />

        <Input
          value={term}
          placeholder={"Enter Term"}
          title="Term (Years)"
          onChange={termHandler}
          errorMessage="Term Required"
          error={isCalculateClicked && term === ""}
        />

        <Input
          value={rate}
          placeholder={"Enter Rate of Intrest"}
          title="Rate of Intrest (%)"
          onChange={rateHandler}
          error={isCalculateClicked && rate === ""}
        />
      </div>
      <div className="calcButton">
        <button onClick={calculate}>Calculate</button>
      </div>
      <div className="result">
        <h4> Interest Amount is: {interest}</h4>
        <h4> Total Amount with Interest is: {total}</h4>
      </div>
    </div>
  );
}
