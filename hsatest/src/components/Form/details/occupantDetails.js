import React from "react";
import  MapContainer from "../mapIntegration/map";
import Province from "./province"
import Territory from "./territory";


function OccupantDetails() {
    return(
        <div>
            <div class="container center">
                <div className="oc-details">
                    <div className="card block left ">
                        Occupant's First Name:&emsp; <input type="text" placeholder= "Enter First Name" className="inputV3"/><p/>
                        Number of Occupants:&emsp; <input type="number" placeholder= "Number of Occupants" step="1"/><p/>
                        Number of Bedrooms:&emsp; <input type="number" placeholder= "Number of Bedrooms" step="1" /><p/>
                        Number of Floors:&emsp;&emsp; <input type="number" placeholder= "Number of Floors" step="1"/><p/>
                        <br/><p/>

                    
                        
                        
                    </div>
                    <div className="card block right">
                        Occupant's Last Name:&emsp; <input type="text" placeholder= "Enter Last Name" className="inputV3"/><p/>
                        Approximate Square Footage:&emsp; <input type="number" placeholder= "Enter value" step="0.1"/><p/>
                        House Type: &emsp;
                        <select type="dropdown">
                            <option value="Owned">Private Owned</option>
                            <option value="Rented">Rental</option>
                            <option value="Band Housing">Social House</option>
                        </select><br/> 
                        
                    </div>
                    
                </div>
                
            </div>
            <div class="container center">
                {/* <h3>Address Details</h3> */}
                <div className="card block right">
                    
                    
                    Street Number/Name: &emsp; <input type="value" placeholder="Enter Street Number/Name" className="inputV2"/><p/> 
                    Unit/Suite Number: &emsp; <input type="value" placeholder="Enter Unit Number" />&emsp;&emsp;
                    Postal Code: &emsp; <input type="text" placeholder="Enter Postal Code"/><p/>
                    Province:&emsp; <Province /> &emsp;&emsp;&emsp;&emsp;
                    Territory:&emsp; < Territory /> <p/> 
                </div>

            </div><p/>
            <br/>
            
        </div>
    

    )
}

export default OccupantDetails;