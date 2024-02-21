import React, { useState } from "react";
import '../../assets/css/login.css'
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data,setData] = useState({
        MailId:"",
        pass:""
      })
      const {MailId,pass} = data;
      
      const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]});
      }
      
      const submitHandler = e => {
        e.preventDefault();
        navigate("/app-project/user/*");
      }
  const renderform = (
    <div className="Form">
        <form onSubmit={submitHandler}>
            <div className="input">
            <label>Email ID: </label>
            <input type="email" name="MailId" value={MailId} onChange={changeHandler} required/>
            </div>
            <div className="input">
            <label>Password: </label>
            <input type="password" name="pass" value={pass} onChange={changeHandler} required/>
            </div>
            <div className="button">
                <input type="submit"/>
            </div>
            <div className="signup-link">
            <p>Not registered? <Link to="/app-project/signup">Sign Up</Link></p>
          </div>
        </form>
    </div>
      );
    return(
        <div className="app">
        <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderform}
      </div>  
        </div>
    );  
}
export default Login