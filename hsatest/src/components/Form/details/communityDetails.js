import React from "react";
import Province from "./province"
import Territory from "./territory";

function CommunityDetails() {
    return(
        <div className="co-details">
            <section className="block left">
                Community:&emsp; <input type="text" placeholder="Enter Community name" /><p/>
                Representative First Name:&emsp; <input type="text" placeholder="Enter First Name"/><p/>
                Representative Email:&emsp; <input type="email" placeholder="Enter Email" /><p/>
                Province:&emsp; <Province /> <p/>
                BAND#:&emsp; <input type="value" maxLength="3" placeholder="Enter Band Number"/><p/>
            </section>
            <section className="block right">
                &emsp;Representative Last Name:&emsp; <input type="text" placeholder="Enter Last Name" /><p/>
                &emsp;Alternative contact detail:&emsp; <input type="text" placeholder="Enter Phone Number" /><p/>
                &emsp;Phone Number:&emsp; <input type="text" placeholder="Enter Phone Number" /><p/>
                Territory:&emsp; < Territory /> <p/>
            </section>
        </div>
    )
}

export default CommunityDetails;