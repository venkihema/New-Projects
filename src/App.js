import "./App.css";
import { InterestCalculator } from "./InterestCalculator/InterestCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Calculator } from "./Calculator/Calculator";
import { TodoList } from "./TodoList/TodoList";
import { Login } from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interestcalc" element={<InterestCalculator />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
