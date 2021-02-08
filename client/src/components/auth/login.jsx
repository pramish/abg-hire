import React, { useState } from "react";

const Login = () => {
  const [logindata, setLogin] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDevault();
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          value={logindata.email}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={logindata.password}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
