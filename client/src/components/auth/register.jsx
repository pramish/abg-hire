import React, { useState } from "react";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDevault();
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="text" placeholder="Email address" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="phoneNumber">Password</label>
        <input type="text" placeholder="phoneNumber" />
        <button type="button">Register</button>
      </form>
    </div>
  );
}
