import React, { useState } from "react";
import { registerQuery } from "../../graphql/auth/auth";
import GraphQlClient from "../../graphql/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [fullAddress, setAddress] = useState("");
  const [errors, setErrors] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    GraphQlClient.request(registerQuery, {
      email,
      password,
      phoneNumber,
      name,
      fullAddress,
    })
      .then((data) => {
        console.log("Am I here. Success");
        console.log(data);
      })
      .catch((err) => {
        console.log("Am I here. Failure");
        console.log(err);
        setErrors(err);
      });
  };
  return (
    <div>
      <h1>Register</h1>
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
        <label htmlFor="fullName">Full Address</label>
        <input
          id="fullName"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <label htmlFor="fullAddress">Full Address</label>
        <input
          id="fullAddress"
          type="text"
          placeholder="Full Address"
          value={fullAddress}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {errors ? JSON.stringify(errors.response.errors) : ""}
    </div>
  );
}
