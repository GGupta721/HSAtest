import { Component } from 'react';
import Assessment from "./assessment/assessment"
import Form from "./form/form";
import './App.css';
import Footer from './Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-body">
          <Assessment />
          <Form /> 
        </div>
      </div>
    )
  }
}

export default App;
