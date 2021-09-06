import { Component } from 'react';
import './App.css';
import Assessment from "./assessment/assessment"
import Form from "./Form/form"
import Footer from './Footer/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-body">
          <Assessment />
          <Form />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
