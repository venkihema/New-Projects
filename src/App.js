import "./App.css";
import { InterestCalculator } from "./InterestCalculator/InterestCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Calculator } from "./Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interestcalc" element={<InterestCalculator />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/calc" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
