import React from "react";
import Login from "./Login";
import Signup from "./Signup";

class Authentication extends React.Component {
    state = {
      page: 1
    }
  
    goSignupPage = () => {
      const { page } = this.state;
      this.setState({
          page: page + 1
      });
    };
  
    // Go back to prev step
    goLoginPage = () => {
        const { page } = this.state;
        this.setState({
            page: page - 1
        });
    };
  
  
    render() {
  
      const {page} = this.state;
      const {nextPage} = this.props
  
      switch (page){
        case 1:
          return (
              <Login goSignupPage = {this.goSignupPage} nextPage={nextPage}></Login>                          
          )
        
        case 2:
          return (
              <Signup goLoginPage = {this.goLoginPage}></Signup>            
          )
  
        default :
          return ('')
  
  
      }
      // const filePath = "./ListFirstNations.xlsx";
      // handleFile(filePath);
  
  
      
    }
  }
  
  export default Authentication;