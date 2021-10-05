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
        province:null,
        territory:null,

    }

    // provinceHandler = () => {

    // }

    // territoryHandler = () => {

    // }
    
    render(){
        return (
            <div className="occupant-card center">
                <div className="oc-details ">
                    <div class="grid-OccupantDetails">
                        <div className="card grid-child">
                            Occupant's First Name:&emsp; <input type="text" placeholder= " Enter First Name" className="inputV3" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            Number of Occupants:&emsp; <input type="number" placeholder= " Number of Occupants" step="1" value={this.state.numOccupants} onChange={eve => this.setState({numOccupants: eve.target.value})}/><p/>
                            Number of Bedrooms:&emsp; <input type="number" placeholder= " Number of Bedrooms" step="1" value={this.state.numBedrooms} onChange={eve => this.setState({numBedrooms: eve.target.value})}/><p/>
                            Number of Floors:&emsp; <input type="number" placeholder= " Number of Floors" step="1" value={this.state.numFloors} onChange={eve => this.setState({numFloors: eve.target.value})}/><p/>
                            <br/><p/>

                        </div>
                        <div className="card grid-child">
                            Occupant's Last Name:&emsp; <input type="text" placeholder= " Enter Last Name" className="inputV3" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/><p/>
                            Approximate Square Footage:&emsp; <input type="number" placeholder= " Enter value" step="0.1" value={this.state.approxSF} onChange={eve => this.setState({approxSF: eve.target.value})}/><p/>
                            House Type: &emsp;
                            <select type="dropdown" value={this.state.houseType} onChange={eve => this.setState({houseType: eve.target.value})}>
                                <option value="Owned">Private Owned</option>
                                <option value="Rented">Rental</option>
                                <option value="Band Housing">Social House</option>
                            </select><br/> 
                            
                        </div>

                        
                    </div>
                    <div className="address-card grid-child ">                    
                                Street:&emsp; <input type="value" placeholder=" Enter Street" className="inputV2" value={this.state.street} onChange={eve => this.setState({street: eve.target.value})}/><p/> 
                                <div class="grid-AddressDetails">
                                    <div className="cell-1">
                                        Unit/Suite Number:&emsp; <input type="value" placeholder=" Enter Unit Number" value={this.state.unitNum} onChange={eve => this.setState({unitNum: eve.target.value})} />
                                    </div>
                                    <div className="cell-2">
                                        Postal Code:&emsp; <input type="text" placeholder=" Enter Postal Code" value={this.state.postalCode} onChange={eve => this.setState({postalCode: eve.target.value})}/>
                                    </div>
                                    <div className="cell-3">
                                        Province:&emsp; 
                                        <select type="dropdown" value={this.state.province} onChange={eve => {this.setState({province: eve.target.value}); this.props.provincehandler(eve.target.value)} } >
                                            <option value="Alberta">Alberta</option>
                                            <option value="British Columbia">British Columbia</option>
                                            <option value="Manitoba">Manitoba</option>
                                            <option value="New Brunswick">New Brunswick</option>
                                            <option value="New Foundaland and Labrador">New Foundaland and Labrador</option>
                                            <option value="Nova Scotia">Nova Scotia</option>
                                            <option value="Ontario">Ontario</option>
                                            <option value="Prince Edward Island">Prince Edward Island</option>
                                            <option value="Quebec">Quebec</option>
                                            <option value="Sasketchewan">Sasketchewan</option>

                                        </select>
                                        {/* <Province  /> */}
                                    </div>                        
                                    <div className="cell-4">
                                        Territory:&emsp; 
                                        <select type="dropdown" value={this.state.territory} onChange={eve => this.setState({territory: eve.target.value})}>
                                            <option value="Northwest Territories">Northwest Territories</option>
                                            <option value="Nunavut">Nunavut</option>
                                            <option value="Yukon">Yukon</option>
                                        </select>
                                        {/* <Territory /> */}
                                    </div>                      
                                </div>
                                
                        </div>
                
                </div>
                <br/><br/>              
                
            </div>
            
        );
    }
    
    
}

export default OccupantDetails;