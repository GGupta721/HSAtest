import {Component} from "react";
import "./form.css"
import Ack from "./ack/ack";
import OccupantDetails from "./occupantDetails/occupantDetails";
import CommunityDetails from "./communityDetails/communityDetails";
import Exterior from "./exterior/exterior";

class Form extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="form-div"><p/>
                <form className="form">
                    <Ack /><p/>
                    <OccupantDetails /><p/>
                    <CommunityDetails /><p/>
                    <Exterior />
                </form>
            </div>
        );
    }
}

export default Form
