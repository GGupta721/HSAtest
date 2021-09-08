import {Component} from "react"
import "./form.css"
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";

class Form extends Component {
    render() {
        return (
            <div className="form-div">
            <p/>
                <div>
                    <form className="form">
                        <input type="checkbox" />
                        I Acknowledge Reading This Instruction  
                        Assessor's First Name: <input type="text" name="fname" />&nbsp; 
                        Assessor's Last Name: <input type="text" name="lname" />&nbsp;
                        Date: <input type="Date" />
                        <p/>
                        <div className="details">
                            <h4> Occupant's Details</h4><p/>
                            <OccupantDetails />
                        </div><p/>
                        <div className="c-details">
                            <h4> Community Details</h4><p/>
                            <CommunityDetails />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
