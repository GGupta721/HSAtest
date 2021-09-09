import React from "react";
import Province from "./province"
import Territory from "./territory";

function CommunityDetails() {
    return(
        <div className="co-details">
            <section className="block">
                Community:&emsp; <input type="text" /><p/>
                Representative First Name:&emsp; <input type="text" /><p/>
                Representative Email:&emsp; <input type="email" /><p/>
                Province:&emsp; <Province /> <p/>
                BAND#:&emsp; <input type="text" /><p/>
            </section>
            <section className="block">
                &emsp;Representative Last Name:&emsp; <input type="text" /><p/>
                &emsp;Alternative contact detail:&emsp; <input type="text" /><p/>
                &emsp;Phone Number:&emsp; <input type="text" /><p/>
                Territory:&emsp; < Territory /> <p/>
            </section>
        </div>
    )
}

export default CommunityDetails;