import React from "react";

export function Input({
  value = "",
  title = "",
  onChange = () => {},
  placeholder,
  error = false,
  errorMessage = "Required",
}) {
  return (
    <div className="input1">
      <h4 style={{ textAlign: "center" }}>{title}</h4>
      <input
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error ? (
        <p style={{ textAlign: "center", fontSize: "small", color: "red" }}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
