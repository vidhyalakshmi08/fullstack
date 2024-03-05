import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/signup.css"

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = e => {
    navigate("/app-project/user/home");
  };

  return (
    <div className="app">
      <div className="signup-form">
        <div className="title">Sign Up</div>
        <form onSubmit={onSubmit}>
        <div className="input">
            <label>First Name: </label>
            <input type="text" name="text" required />
          </div>
          <div className="input">
            <label>Last Name: </label>
            <input type="text" name="text" required />
          </div>
          <div className="input">
            <label>Email ID: </label>
            <input type="email" name="email" required />
          </div>
          <div className="input">
            <label>Password: </label>
            <input type="password" name="password" required/>
          </div>
          <div className="button">
            <button type="submit">Sign Up</button>
          </div>
          <div className="login-link">
            <p>Already have an account? <Link to="/app-project/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
