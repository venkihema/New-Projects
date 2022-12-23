import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h1>Welcome to my Projects</h1>
      <div>
        <Link to="interestcalc">
          <li style={{ fontSize: "20px" }}>Interest Calculator</li>
        </Link>
      </div>
    </div>
  );
}
