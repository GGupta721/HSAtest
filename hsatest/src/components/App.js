import { Component } from 'react';
import './App.css';
import Assessment from "./assessment/assessment"
import Form from "./Form/form"
// import Footer from './Footer/Footer.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    // const filePath = "./ListFirstNations.xlsx";
    // handleFile(filePath);


    return (
      <div className="App">
        <div className="page-body">
          <Assessment /><br/>
          <Form/><br/>
          <ToastContainer style={{ width: "500px" }} limit={2}/>
          
          {/* <Footer/> */}
        </div>
      </div>
    )
  }
}

export default App;
