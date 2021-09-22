import React from "react";
import Province from "../utility/province"
import Territory from "../utility/territory";

function CommunityDetails() {
    return(
        <div className="comm-div">
            <h4>Community Details</h4>
            <div className="comm-details">
                <div className="block-left">
                    Community:&emsp; <input type="text" placeholder="Enter Community name" /><p/>
                    Representative First Name:&emsp; <input type="text" placeholder="Enter First Name"/><p/>
                    Representative Last Name:&emsp; <input type="text" placeholder="Enter Last Name" /><p/>
                    Province:&emsp; <Province /> <p/>
                    Band Number:&emsp; <input type="value" maxLength="3" placeholder="Enter Band Number"/><p/>
                </div>
                <div className="block-right">
                    Representative Email:&emsp; <input type="email" placeholder="Enter Email" /><p/>
                    Phone Number:&emsp; <input type="text" placeholder="Enter Phone Number" /><p/>
                    Alternative contact detail:&emsp; <input type="text" placeholder="Enter Phone Number" /><p/>   
                    Territory:&emsp; < Territory /> <p/>
                </div>
            </div>    
        </div>
    )
}

export default CommunityDetails;