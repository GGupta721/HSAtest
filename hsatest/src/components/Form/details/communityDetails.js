import React from "react";
import Province from "./province"
import Territory from "./territory";
import "./CommunityDetails.css"


const CommunityDetails = () => {
    return(
        <div className="community-card center">
            <div className="co-details">
                <div className="cell-1">
                    Community:&emsp; <input type="text" placeholder=" Enter Community Name" className="inputV2"/>
                </div><br/>
                
                <div class="grid-CommunityDetails">
                    
                    <div className="cell-2">
                        Representative First Name:&emsp; <input type="text" placeholder=" Enter First Name" className="inputV3"/>
                    </div>
                    <div className="cell-3">
                        Representative Last Name:&emsp; <input type="text" placeholder=" Enter Last Name" className="inputV3"/>
                    </div>
                    <div className="cell-4">
                        Phone Number:&emsp; <input type="tel" placeholder=" Enter Phone Number" />
                    </div>
                    <div className="cell-5">
                        Alternative contact detail:&emsp; <input type="text" placeholder=" Enter Contact" />
                    </div>
                    <div className="cell-6">
                        Representative Email:&emsp; <input type="email" placeholder=" Enter Email" />
                    </div>
                    <div className="cell-7">
                        Band Number:&emsp; <input type="value" maxLength="3" placeholder=" Enter Band Number"/>
                    </div>
                    <div className="cell-8">
                        Province:&emsp; <Province />
                    </div>                        
                    <div className="cell-9">
                        Territory:&emsp; <Territory />
                    </div>  
                    
                </div>
                
            </div>
            <br/>
        </div>
    )
}

export default CommunityDetails;