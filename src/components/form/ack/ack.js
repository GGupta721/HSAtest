import {Component} from "react";

class Acknowledge extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ack-div">
                &emsp;<input type="checkbox" /> I Acknowledge Reading This Instruction &emsp;
                Assessor's First Name: <input type="text" name="fname" />&nbsp; 
                Assessor's Last Name: <input type="text" name="lname" />&nbsp;&emsp;
                Date: <input type="Date" />
            </div>
        );
    }
}

export default Acknowledge;
