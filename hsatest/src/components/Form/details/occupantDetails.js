import React from "react";
import  MapContainer from "../mapIntegration/map";
// import map from "../mapIntegration/map";
import Info from "../Exterior/info";

function OccupantDetails() {
    return(
        <div className="oc-details">
            <section className="block">
                Occupant's Fist Name:&emsp; <input type="text" placeholder= "Enter First Name"/><p/>
                Number of Occupants:&emsp; <input type="value" placeholder= "Nos of Occupants" /><p/>
                Number of Bedrooms:&emsp; <input type="value" placeholder= "Nos of Bedrooms" /><p/>
                Number of Floors:&emsp;&emsp; <input type="value" placeholder= "Nos of Floors"/><p/>
                Approximate Square:&emsp; <input type="value" placeholder= "Enter value"/><p/>
                {/* Adress:&emsp; <textarea rows="4" cols="49"/><p/>
                Geolocation (GPS Coordinate):<p/> */}
                Address: <MapContainer/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </section>
            {/* Address:&emsp; <MapContainer/> */}
            <section className="block">
                &emsp; Occupant's Last Name:&emsp; <input type="text" placeholder= "Enter Last Name"/><p/> 
                <fieldset>      
                    <legend>House Type</legend>      
                    <input type="checkbox" name="house-type" value="Privately-Owned"/>Privately Owned<br/>      
                    <input type="checkbox" name="house-type" value="Rental"/>Rental<br/>      
                    <input type="checkbox" name="house-type" value="Social-House"/>Social House<br/>      
                </fieldset>  

            </section>

            

        </div>
    )
}

export default OccupantDetails;