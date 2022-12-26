import { Link } from "react-router-dom";
import "./App.css";
export function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Welcome to my Projects
      </h1>
      <div>
        <Link to="interestcalc" style={{ textDecoration: "none" }}>
          <p>Interest Calculator</p>
        </Link>
        <Link to="search" style={{ textDecoration: "none" }}>
          <p>Search Filter</p>
        </Link>
        <Link to="calc" style={{ textDecoration: "none" }}>
          <p>Calculator</p>
        </Link>
      </div>
    </div>
  );
}
