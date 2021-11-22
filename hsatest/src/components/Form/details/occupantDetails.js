import React from "react";
// import Province from "./province"
import Territory from "./territory";
import "./OccupantDetails.css"


class OccupantDetails extends React.Component{

    continue = (eve) => {
        eve.preventDefault();
        this.props.nextPage();
    }

    
    render(){
        const {occupantValues, handleChange} = this.props;

        return (
            <div className="occupant-card center">
                <div className="oc-details ">
                    <div className="grid-OccupantDetails">
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
                        <div className="grid-AddressDetails">
                            <div className="cell-1">
                                Address:&emsp; <input type="value" placeholder=" Enter Unit Number" defaultValue={occupantValues.unitNum} onChange={handleChange('unitNum')}/>

                            </div>
                            <div className="cell-1">
                                Province/Territory:&emsp; <Territory />
                            </div>
                            <div className="cell-9">
                                City:&emsp; <input type="value" placeholder=" Enter Street" defaultValue={occupantValues.street} onChange={handleChange('street')}/><p/> 

                            {/* <input type= "text" value={this.state.territory} readonly/> */}
                            </div> 
                            <div className="cell-2">
                                Postal Code:&emsp; <input type="text" placeholder=" Enter Postal Code" defaultValue={occupantValues.postalCode} onChange={handleChange('postalCode')}/>
                            </div>
                            
                        </div>
                                
                    </div>
                
                </div>
                <br/><br/>    
                <button className="ui right labeled icon button next blue" onClick={this.continue}>
                    <i className="right arrow icon"></i>
                    Continue
                </button>
          
                
            </div>
            
        );
    }
    
    
}

export default OccupantDetails;