import { Component } from "react";
import "./occupantDetails.css"
import Province from "../utility/province"
import Territory from "../utility/territory";


class OccupantDetails extends Component {
    render () {
        return (
            <div className="occ-div">
                <h4>Occupant's Details</h4>
                <div className="occ-details">
                    <div className="block-left">
                        Occupant's First Name:&emsp; <input type="text" placeholder= "Enter First Name"/><p/>
                        Number of Occupants:&emsp; <input type="value" placeholder= "Number of Occupants" /><p/>
                        Number of Bedrooms:&emsp; <input type="value" placeholder= "Number of Bedrooms" /><p/>
                        Number of Floors:&emsp;&emsp; <input type="value" placeholder= "Number of Floors"/><p/>
                        Approximate Square Footage:&emsp; <input type="value" placeholder= "Enter value"/><p/>
                        House Type: &emsp;
                        <select type="dropdown">
                            <option value="Owned">Private Owned</option>
                            <option value="Rented">Rental</option>
                            <option value="Band Housing">Social House</option>
                        </select><br/><p/>    
                    </div>

                    <div className="block-right">
                        Occupant's Last Name:&emsp; <input type="text" placeholder= "Enter Last Name"/><p/> 
                        Unit/Suite Number: &emsp; <input type="value" placeholder="Enter Unit Number"/><p/>
                        Street Number: &emsp; <input type="value" placeholder="Enter Street Number"/><p/> 
                        Street Name: &emsp; <input type="text" placeholder="Enter Street Name"/><p/>               
                        Postal Code: &emsp; <input type="text" placeholder="Enter Postal Code"/><p/>
                        Province:&emsp; <Province /> <p/>
                        Territory:&emsp; < Territory /> <p/>
                    </div>
                </div>    
            </div>
        )
    }
}

export default OccupantDetails;