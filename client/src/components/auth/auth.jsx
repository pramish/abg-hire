import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Auth = () => {
  return (
    <div>
      <div className="container">
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              id="email"
              name="email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
          <div className="input-field">
            <label htmlFor="remember">
              <input type="checkbox" name="" id="remember" />
              Remember me
            </label>
          </div>
          <div className="action">
            <Link to="/forgot-password">forgot your password?</Link>
            <button id="btn" className="btn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
