import React from "react";

function OccupantDetails() {
    return(
        <div className="oc-details">
            <section className="block">
                Occupant's Fist Name:&emsp; <input type="text" /><p/>
                Number of Occupants:&emsp; <select type="dropdown" /><p/>
                Number of Bedrooms:&emsp; <select type="dropdown" /><p/>
                Number of Floors:&emsp; <select type="dropdown" /><p/>
                Approximate Square:&emsp; <input type="text" /><p/>
                Adress:&emsp; <textarea rows="4" cols="49"/><p/>
                Geolocation (GPS Coordinate):<p/>
                Map:
            </section>
            <section className="block">
                &emsp; Occupant's Last Name:&emsp; <input type="text"/><p/> 
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