import React, { useState } from "react";
// import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
// import UserPool from "../UserPool";
import './Login.css'

const Login = (props) => {
  const [credentials, setCredentials] = useState({email:'Nifsc@test.com', password:'Nifsc2021.'})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if(email===credentials.email && password===credentials.password ){
      props.nextPage();
    }
    else{

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
      <h3>Login</h3><br/>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:&emsp; </label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input><br/><br/>
        <label htmlFor="password">Password:&emsp; </label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input><br/><br/>
        <button type="submit" className="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default Login;