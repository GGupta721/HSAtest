import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";

class Form extends Component {
    render() {
        return (
            <div className="form-div">
            <p/>
                <div>
                    <form className="form">
                        <input type="checkbox" />
                        I Acknowledge Reading This Instruction; <br/>
                        Assessor's First Name: <input type="text" name="fname" />&nbsp;&emsp; 
                        Assessor's Last Name: <input type="text" name="lname" />&nbsp;&emsp;
                        Date: <input type="Date" />
                        <p/>
                        <div className="details">
                            <h2> Occupant's Details</h2><p/>
                            <OccupantDetails />
                        </div><p/>
                        <div className="c-details">
                            <h2> Community Details</h2><p/>
                            <CommunityDetails />
                        </div><p/>
                        <div className="exterior">
                         <Exterior/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
