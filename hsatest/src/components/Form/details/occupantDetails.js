import React, {useState} from "react";
import Province from "./province"
import Territory from "./territory";
import "./OccupantDetails.css"


class OccupantDetails extends React.Component{
// const OccupantDetails = () => {
    state = {
        firstName: "",
        lastName:"",
        numOccupants:null,
        numBedrooms:null,
        numFloors:null,
        approxSF:null,
        houseType:"",
        street:"",
        unitNum:"",
        postalCode:"",
        province:"",
        territory:"",

    }
        // const 
    render(){
        return (
            <div className="occupant-card center">
                <div className="oc-details ">
                    <div class="grid-OccupantDetails">
                        <div className="card grid-child">
                            Occupant's First Name:&emsp; <input type="text" placeholder= " Enter First Name" className="inputV3" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            Number of Occupants:&emsp; <input type="number" placeholder= " Number of Occupants" step="1" value={this.state.numOccupants} onChange={eve => this.setState({numOccupants: eve.target.value})}/><p/>
                            Number of Bedrooms:&emsp; <input type="number" placeholder= " Number of Bedrooms" step="1" value={this.state.numBedrooms} onChange={eve => this.setState({numBedrooms: eve.target.value})}/><p/>
                            Number of Floors:&emsp; <input type="number" placeholder= " Number of Floors" step="1" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            <br/><p/>

                        </div>
                        <div className="card grid-child">
                            Occupant's Last Name:&emsp; <input type="text" placeholder= " Enter Last Name" className="inputV3" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            Approximate Square Footage:&emsp; <input type="number" placeholder= " Enter value" step="0.1" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            House Type: &emsp;
                            <select type="dropdown" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}>
                                <option value="Owned">Private Owned</option>
                                <option value="Rented">Rental</option>
                                <option value="Band Housing">Social House</option>
                            </select><br/> 
                            
                        </div>

                        
                    </div>
                    <div className="address-card grid-child ">                    
                                Street:&emsp; <input type="value" placeholder=" Enter Street" className="inputV2" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/> 
                                <div class="grid-AddressDetails">
                                    <div className="cell-1">
                                        Unit/Suite Number:&emsp; <input type="value" placeholder=" Enter Unit Number" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})} />
                                    </div>
                                    <div className="cell-2">
                                        Postal Code:&emsp; <input type="text" placeholder=" Enter Postal Code" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/>
                                    </div>
                                    <div className="cell-3">
                                        Province:&emsp; <Province />
                                    </div>                        
                                    <div className="cell-4">
                                        Territory:&emsp; <Territory />
                                    </div>                      
                                </div>
                                
                        </div>
                
                </div>
                <br/>
                
            </div>
        );
    }
    
    
}

export default OccupantDetails;