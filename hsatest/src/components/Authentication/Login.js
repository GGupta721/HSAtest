import React, { useState } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import UserPool from "../UserPool";
import { toast } from 'react-toastify';
import './Authentication.css'

const Login = (props) => {
  const [credentials, setCredentials] = useState({email:'Nifsc@test.com', password:'Nifsc2021.'})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    props.goSignupPage();
  }

  const valdateAuthenticationError = (msg) => {
    toast.error(msg, {
            position: toast.POSITION.TOP_CENTER,
    });
  }

  const valdateAuthenticationSuccess = (msg) => {
    toast.success(msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(email===credentials.email && password===credentials.password ){
      props.nextPage();
      valdateAuthenticationSuccess('Login Successfull')

    }
    else{
      valdateAuthenticationError('Login Failed: Incorrect Credentials')
    }
    
    


    // const user = new CognitoUser({
    //   Username: email,
    //   Pool: UserPool,
    // });

    // const authDetails = new AuthenticationDetails({
    //   Username: email,
    //   Password: password,
    // });

    // user.authenticateUser(authDetails, {
    //   onSuccess: (data) => {
    //     console.log("onSuccess: ", data);
    //   },
    //   onFailure: (err) => {
    //     console.error("onFailure: ", err);
    //   },
    //   newPasswordRequired: (data) => {
    //     console.log("newPasswordRequired: ", data);
    //   },
    // });
  };

  

  return (
    <div className="center">
      <h1 className="blue">Sign In Page</h1><br/>
      <form onSubmit={onSubmit}>
        
        <label htmlFor="email">Enter Email:&emsp; </label><br/>
        <input value={email} placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}></input><br/><br/>
        <label htmlFor="password">Enter Password:&emsp; </label><br/>
        <input value={password} type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}></input><br/><br/>
        <div className="btnGrid">
          <button type="submit" className="loginBtn">Login</button>
          <button className="SignUpBtn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;