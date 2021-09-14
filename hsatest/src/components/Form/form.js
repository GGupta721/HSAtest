import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";

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
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
