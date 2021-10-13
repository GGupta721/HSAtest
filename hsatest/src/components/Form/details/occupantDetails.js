import React, {useState} from "react";
import Province from "./province"
import Territory from "./territory";
import "./OccupantDetails.css"


class OccupantDetails extends React.Component{
// const OccupantDetails = () => {
    // state = {
    //     firstName: "",
    //     lastName:"",
    //     numOccupants:null,
    //     numBedrooms:null,
    //     numFloors:null,
    //     approxSF:null,
    //     houseType:"",
    //     street:"",
    //     unitNum:"",
    //     postalCode:"",
    //     province:null,
    //     territory:null,

    // }

    // provinceHandler = () => {

    // }

    // territoryHandler = () => {

    // }
    continue = (eve) => {
        eve.preventDefault();
        this.props.nextPage();
    }

    
    render(){
        const {occupantValues, handleChange} = this.props;

        return (
            <div className="occupant-card center">
                <div className="oc-details ">
                    <div class="grid-OccupantDetails">
                        <div className="card grid-child">
                            Occupant's First Name:&emsp; <input type="text" placeholder= " Enter First Name" className="inputV3" defaultValue={occupantValues.firstName} onChange={handleChange('firstName')} /><p/>
                            Number of Occupants:&emsp; <input type="number" placeholder= " Number of Occupants" step="1" defaultValue={occupantValues.numOccupants} onChange={handleChange('numOccupants')}/><p/>
                            Number of Bedrooms:&emsp; <input type="number" placeholder= " Number of Bedrooms" step="1" defaultValue={occupantValues.numBedrooms} onChange={handleChange('numBedrooms')}/><p/>
                            Number of Floors:&emsp; <input type="number" placeholder= " Number of Floors" step="1" defaultValue={occupantValues.numFloors} onChange={handleChange('numFloors')}/><p/>
                            <br/><p/>

                        </div>
                        <div className="card grid-child">
                            Occupant's Last Name:&emsp; <input type="text" placeholder= " Enter Last Name" className="inputV3" defaultValue={occupantValues.lastName} onChange={handleChange('lastName')}/><p/>
                            Approximate Square Footage:&emsp; <input type="number" placeholder= " Enter value" step="0.1" defaultValue={occupantValues.approxSF} onChange={handleChange('approxSF')}/><p/>
                            House Type: &emsp;
                            <select type="dropdown" defaultValue={occupantValues.houseType} onChange={handleChange('houseType')}>
                                <option value="Owned">Private Owned</option>
                                <option value="Rented">Rental</option>
                                <option value="Band Housing">Social House</option>
                            </select><br/> 
                            
                        </div>

                        
                    </div>
                    <div className="address-card grid-child ">                    
                                Street:&emsp; <input type="value" placeholder=" Enter Street" className="inputV2" defaultValue={occupantValues.street} onChange={handleChange('street')}/><p/> 
                                <div class="grid-AddressDetails">
                                    <div className="cell-1">
                                        Unit/Suite Number:&emsp; <input type="value" placeholder=" Enter Unit Number" defaultValue={occupantValues.unitNum} onChange={handleChange('unitNum')}/>
                                    </div>
                                    <div className="cell-2">
                                        Postal Code:&emsp; <input type="text" placeholder=" Enter Postal Code" defaultValue={occupantValues.postalCode} onChange={handleChange('postalCode')}/>
                                    </div>
                                    {/* <div className="cell-3">
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
                                    </div>                         */}
                                    {/* <div className="cell-4">
                                        Territory:&emsp; 
                                        <select type="dropdown" value={this.state.territory} onChange={eve => this.setState({territory: eve.target.value})}>
                                            <option value="Northwest Territories">Northwest Territories</option>
                                            <option value="Nunavut">Nunavut</option>
                                            <option value="Yukon">Yukon</option>
                                        </select>
                                    </div>                       */}
                                </div>
                                
                        </div>
                
                </div>
                <br/><br/>    
                <button class="ui right labeled icon button next NavLinks" onClick={this.continue}>
                    <i class="right arrow icon"></i>
                    Next
                </button>
                {/* <button onClick={this.continue}>continue</button> */}
          
                
            </div>
            
        );
    }
    
    
}

export default OccupantDetails;