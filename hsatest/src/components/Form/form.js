import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";

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
                                Assessor's First Name: <input type="text" name="fname" />&nbsp;&emsp; 
                                Assessor's Last Name: <input type="text" name="lname" />&nbsp;&emsp;
                                Date: <input type="Date" />
                            </div>
                            <p/>
                            <div className="details db">
                                <h1 className="blue"> Occupant's Details</h1><p/>
                                <OccupantDetails />
                            </div><p/>
                            <div className="c-details db">
                                <h1 className="blue"> Community Details</h1><p/>
                                <CommunityDetails />
                            </div><p/>

                            <div className="exterior db">
                                <h1 className="blue"> Exterior Details</h1><p/>
                                <Exterior/>
                            </div>

                            <div className="interior db">
                                <h1 className="blue"> Interior Details</h1><p/>
                                <InteriorDetails/>
                            </div>
                            <input type="submit" value="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
