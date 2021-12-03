import React, { useState } from "react";
// import UserPool from "../UserPool";
import { toast } from 'react-toastify';
import './Signup.css'

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    props.goLoginPage();
  }

  const valdateAuthenticationSuccess = (msg) => {
    toast.success(msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
    });
  }

  const valdateAuthenticationError = (msg) => {
    toast.error(msg, {
            position: toast.POSITION.TOP_CENTER,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(password.length > 7){
      if (password===confirmPassword){
        valdateAuthenticationSuccess('Sign up Successfull')
        
      }
      else if (password!==confirmPassword){
        valdateAuthenticationError('Passwords do not match!')
      }
    }
    else{
      valdateAuthenticationError('Passwords does not meet the requirements')
    }
    
    // goSignupPage

    // UserPool.signUp(email, password, [], null, (err, data) => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   console.log(data);
    // });
  };

  return (
    <div className="center">
      <h3 className="blue">Sign Up</h3><br/>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Enter Email:&emsp; </label>
        <input value={email} placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}></input><br/><br/>
        <label htmlFor="password">Set Password (7 characters min):&emsp; </label>
        <input value={password}  type="password" placeholder="Set Password" minlength="7" required onChange={(event) => setPassword(event.target.value)}></input><br/><br/>
        <label htmlFor="password">Confirm Password:&emsp; </label>
        <input value={confirmPassword} type="password" placeholder="Confirm Password" minlength="7" required onChange={(event) => setConfirmPassword(event.target.value)}></input><br/><br/>
        <div className="btnGrid">
          <button type="submit" className="SignUpBtn">Sign Up</button>
          <button className="loginBtn" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
   
  );
};

export default Signup;