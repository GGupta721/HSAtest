import React from "react";
import  MapContainer from "../mapIntegration/map";
import Info from "../Exterior/info";
import Province from "./province"
import Territory from "./territory";


function OccupantDetails() {
    return(
        <div className="oc-details">
            <section className="block left">
                Occupant's First Name:&emsp; <input type="text" placeholder= "Enter First Name"/><p/>
                Number of Occupants:&emsp; <input type="number" placeholder= "Number of Occupants" step="1"/><p/>
                Number of Bedrooms:&emsp; <input type="number" placeholder= "Number of Bedrooms" step="1" /><p/>
                Number of Floors:&emsp;&emsp; <input type="number" placeholder= "Number of Floors" step="1"/><p/>
                Approximate Square Footage:&emsp; <input type="number" placeholder= "Enter value" step="0.1"/><p/>
                &emsp;House Type: &emsp;
                <select type="dropdown">
                    <option value="Owned">Private Owned</option>
                    <option value="Rented">Rental</option>
                    <option value="Band Housing">Social House</option>
                </select><br/><p/>
                
            </section>
            {/* Address:&emsp; <MapContainer/> */}
            <section className="block right">
                &emsp; Occupant's Last Name:&emsp; <input type="text" placeholder= "Enter Last Name"/><p/> 
                Unit/Suite Number: &emsp; <input type="value" placeholder="Enter Unit Number"/><p/>
                Street Number: &emsp; <input type="value" placeholder="Enter Street Number"/><p/> 
                Street Name: &emsp; <input type="text"   placeholder="Enter Street Name"/><p/>               
                Postal Code: &emsp; <input type="text" placeholder="Enter Postal Code"/><p/>
                Province:&emsp; <Province /> <p/>
                Territory:&emsp; < Territory /> <p/>
                {/* <div>
                    <MapContainer/>
                </div> */}
            </section>
        </div>
    )
}

export default OccupantDetails;