import "./Login.css";
import { useState } from "react";
export const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("username", input);
    localStorage.setItem("password", password);
  };
  return (
    <div>
      <center>
        <form className="Form" onSubmit={submitHandler}>
          <div className="userNameField">
            <div>
              <label>UserName </label>
            </div>
            <div className="text">
              <input
                type={"text"}
                value={input}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="passwordField">
            <div>
              <label>Password </label>
            </div>
            <div className="password">
              <input
                type={"password"}
                value={password}
                onChange={passwordChangeHandler}
              />
            </div>
          </div>
          <input className="submitBtn" type={"submit"} name="submit" />
        </form>
      </center>
    </div>
  );
};
