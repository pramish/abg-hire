import React, { useState } from "react";
import { loginQuery } from "../../graphql/auth/auth";
import GraphQlClient from "../../graphql/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calling the request endpoint here passing the data
    GraphQlClient.request(loginQuery, {
      email,
      password,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="text"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Login
        </button>
      </form>
      {/* Display the errors for now */}
      {errors ? JSON.stringify(errors.response.errors) : ""}
    </div>
  );
};

export default Login;
