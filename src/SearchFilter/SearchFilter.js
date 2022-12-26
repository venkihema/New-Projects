import Districts from "./Districts.json";
import { useState } from "react";
export function SearchFilter() {
  const [data, setData] = useState("");
  const searchDistrict = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
      <center>
        <h1 style={{ textDecoration: "underline" }}>Search Your City</h1>
        <div style={{ margin: "30px" }}>
          <input
            type="text"
            value={data}
            placeholder="Search . . ."
            onChange={searchDistrict}
          ></input>
        </div>
        <div>
          {Districts?.filter((dist) => {
            return dist?.name
              ?.toLocaleLowerCase()
              ?.includes(data.toLocaleLowerCase());
          }).map((district) => (
            <p
              key={district.id}
              style={{
                fontSize: "20px",
                padding: "10px",
                background: "lightblue",
                width: "70%",
                borderRadius: "10px",
              }}
            >
              {district.name}
            </p>
          ))}
        </div>
      </center>
    </div>
  );
}
