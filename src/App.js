import "./App.css";
import { InterestCalculator } from "./Interest Calculator/Interest Calculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interestcalc" element={<InterestCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
