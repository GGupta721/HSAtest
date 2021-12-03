import { Component } from 'react';
import './App.css';
import Assessment from "./assessment/assessment"
import Form from "./Form/form"
// import Footer from './Footer/Footer.js'
import Authentication from './Authentication/Authentication';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    page: 1
  }

  nextPage = () => {
    const { page } = this.state;
    this.setState({
        page: page + 1
    });
  };

  // Go back to prev step
  // prevPage = () => {
  //     const { page } = this.state;
  //     this.setState({
  //         page: page - 1
  //     });
  // };


  render() {

    const {page} = this.state;

    switch (page){
      case 1:
        return (
          <div className="App">
            <div className="page-body">
              <Assessment /><br/>
              <Authentication nextPage={this.nextPage}></Authentication>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="App">
            <div className="page-body">
              
              <Assessment /><br/>
              <Form/><br/>
              <ToastContainer style={{ width: "500px" }} />
              
              {/* <Footer/> */}
            </div>
          </div>
        )

      default :
        return ('')


    }
    // const filePath = "./ListFirstNations.xlsx";
    // handleFile(filePath);


    
  }
}

export default App;
