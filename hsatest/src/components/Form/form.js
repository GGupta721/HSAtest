import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";
import Router from "../Router";
import Report from "./Report/Report";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Your filled form has been submitted.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div className="form-div">
            <p/>
                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                            <div className="rightIndent">
                            &emsp;&emsp;<input type="checkbox" />&emsp;
                                I Acknowledge Reading This Instruction; <br/><br/>&emsp;&nbsp;&nbsp;&nbsp;
                                Assessor's First Name: <input type="text" name="fname" className="inputV1"/>&nbsp;&emsp; 
                                Assessor's Last Name: <input type="text" name="lname" className="inputV1" />&nbsp;&emsp;
                                Date: <input type="Date" />
                            </div>
                            <p/>
                            <div>
                                <Router pathName = "/details">
                                    <div className="details db">
                                        <h1 className="blue"> Occupant's Details</h1><p/>
                                        <OccupantDetails />
                                        
                                    </div><p/>
                                    <div className="details db">
                                        <h1 className="blue"> Community Details</h1><p/>
                                        <CommunityDetails />
                                    </div>

                                </Router>
                            </div><p/>
                            <Router pathName = "/exterior">
                                <div className="exterior db">
                                    <h1 className="blue"> Exterior Details</h1><p/>
                                    <Exterior/>
                                </div>
                            </Router><p/>

                            <Router pathName = "/interior">
                                <div className="interior db">
                                    <h1 className="blue"> Interior Details</h1><p/>
                                    <InteriorDetails/>
                                </div>
                            </Router>

                            <div className="interior db">
                                <h1 className="blue"> Interior Details</h1><p/>
                                <InteriorDetails/>
                            </div>

                            <div className="report db">
                                <h1 className="blue">Report</h1>
                                <Report/>
                            </div>
                            <input type="submit" value="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
