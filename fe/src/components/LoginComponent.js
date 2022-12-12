/* eslint-disable jsx-a11y/alt-text */
// import backBtn from "./../assets/back-icon.png";
// import contactIcon from "./../assets/contacts-icon.png";
// import menuIcon from "./../assets/menu-icon.png";
import { React } from "react";
import { useState } from "react";
import "./../style/login.scss";

const LoginComponent = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [passwd, setPasswd] = useState();
  return (
    <div className="login-form">
      <h1>Login...</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-div">
          <label htmlFor="email">Email</label>
          <input
            data-testid="email"
            type="text"
            name="email"
            id="email"
            placeholder="Give your unique email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-div">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            data-testid="uname"
            name="username"
            id="username"
            placeholder="Let's get you a unique name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="input-div">
          <label htmlFor="passwd">Password</label>
          <input
            type="text"
            data-testid="passwd"
            name="passwd"
            id="passwd"
            min="8"
            placeholder="Lock with a strong password"
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
          />
        </div>
        <div className="btn">
          <input type="submit" value="Login" data-testid="login-btn" />
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
