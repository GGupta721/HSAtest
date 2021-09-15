import React from "react";
import  MapContainer from "../mapIntegration/map";
import Info from "../Exterior/info";

function OccupantDetails() {
    return(
        <div className="oc-details">
            <section className="block left">
                Occupant's Fist Name:&emsp; <input type="text" placeholder= "Enter First Name"/><p/>
                Number of Occupants:&emsp; <input type="value" placeholder= "Number of Occupants" /><p/>
                Number of Bedrooms:&emsp; <input type="value" placeholder= "Number of Bedrooms" /><p/>
                Number of Floors:&emsp;&emsp; <input type="value" placeholder= "Number of Floors"/><p/>
                Approximate Square:&emsp; <input type="value" placeholder= "Enter value"/><p/>
                {/* Adress:&emsp; <textarea rows="4" cols="49"/><p/>
                Geolocation (GPS Coordinate):<p/> */}
                {/* Address:&emsp; <input type="text" placeholder= "Enter Address"/><p/>  */}
                <div>
                    <MapContainer/>
                </div>
            </section>
            {/* Address:&emsp; <MapContainer/> */}
            <section className="block right">
                &emsp; Occupant's Last Name:&emsp; <input type="text" placeholder= "Enter Last Name"/><p/> 
                &emsp;House Type: &emsp;
                <select type="dropdown">
                    <option value="Private Owned">Private Owned</option>
                    <option value="Rental">Rental</option>
                    <option value="Social House">Social House</option>
                </select>
            </section>
        </div>
    )
}

export default OccupantDetails;