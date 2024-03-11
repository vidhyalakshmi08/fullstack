import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../services/auth';
import '../../assets/css/login.css'
import { setAuthentication, setToken } from "../../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(data);
      console.log(res.data);
      console.log('Response:', res.data);
      
      // Access the token property from the response
      const token = res.data.token;
      console.log('Token:', token);
      const decodeToken = jwtDecode(token);
      console.log(decodeToken.sub);
      //console.log(res.data);
      dispatch(setAuthentication(true));
      dispatch(setToken(token));
      const roles = res.data.roles;
      console.log('Roles:', roles);
      // Role-based navigation logic
      navigate(roles[0] === "admin" ? "/app-project/admin/dashboard" : "/app-project/user/home");

      setIsSubmitted(true);
    } catch (error) {
      setError("Invalid username or password");
      console.error('Login failed:', error);
    }
  };

  const renderForm = (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <div className="input">
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={changeHandler} required />
        </div>
        <div className="input">
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={changeHandler} required />
        </div>
        <div className="button">
          <input type="submit" />
        </div>
        <div className="signup-link">
          <p>
            Not registered? <Link to="/app-project/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
