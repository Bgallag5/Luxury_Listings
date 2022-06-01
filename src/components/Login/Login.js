import React, { useState } from "react";

export default function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginState((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleLoginSubmit = (e) => {
      e.preventDefault();

      console.log(loginState);
      //dispatch / setState user logged in 
  };

  console.log(loginState);
  return (
    <div className="page flex">
      <div className="login-container flex">
        <div className="login__header">Login</div>
        <form className="login" onSubmit={handleLoginSubmit}>
          <div className="login__field">
            <label htmlFor="email" className="login__label">
              Email:
            </label>
            <input
              onChange={handleLoginChange}
              id="email"
              type="email"
              className="login__input"
            />
          </div>
          <div className="login__field">
            <label htmlFor="password" className="login__label">
              Password:
            </label>
            <input
              onChange={handleLoginChange}
              id="password"
              type="password"
              className="login__input"
            />
          </div>
          <button className="login__button">Login</button>
        </form>
      </div>
    </div>
  );
}
