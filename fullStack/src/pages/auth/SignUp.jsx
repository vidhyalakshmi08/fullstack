import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user"); // Default role is set to "customer"

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:8080/api/user/adduser", {
        username,
        email,
        password,
        role, // Include the selected role in the request
      });
      console.log("API response:", response.data);
      // Handle successful response
      navigate("/app-project/user/home");
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="app">
      <div className="signup-form">
        <div className="title">Sign Up</div>
        <form onSubmit={handleFormSubmit}>
          <div className="input">
            <label>Username: </label>
            <input type="text" name="username" required />
          </div>
          <div className="input">
            <label>Email ID: </label>
            <input type="email" name="email" required />
          </div>
          <div className="input">
            <label>Password: </label>
            <input type="password" name="password" required />
          </div>
          <div className="input">
            <label>User Role: </label>
            <select value={role} onChange={handleRoleChange}>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>
          <div className="button">
            <button type="submit">Sign Up</button>
          </div>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/app-project/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
