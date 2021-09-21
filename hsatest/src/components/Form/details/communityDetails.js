import React from "react";
import Province from "./province"
import Territory from "./territory";

function CommunityDetails() {
    return(
        <div class="container center">
            <div className="co-details">
                <div className="card block left">
                    Community:&emsp; <input type="text" placeholder="Enter Community name" /><p/>
                    Representative First Name:&emsp; <input type="text" placeholder="Enter First Name"/><p/>
                    Representative Last Name:&emsp; <input type="text" placeholder="Enter Last Name" /><p/>
                    Band Number:&emsp; <input type="value" maxLength="3" placeholder="Enter Band Number"/><p/>
                    Province:&emsp; <Province /> <p/>
                    
                </div>
                <div className="card block right">
                    &emsp;Representative Email:&emsp; <input type="email" placeholder="Enter Email" /><p/>
                    &emsp;Phone Number:&emsp; <input type="tel" placeholder="Enter Phone Number" /><p/>
                    &emsp;Alternative contact detail:&emsp; <input type="text" placeholder="Enter Phone Number" /><p/>   
                    Territory:&emsp; < Territory /> <p/>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default CommunityDetails;