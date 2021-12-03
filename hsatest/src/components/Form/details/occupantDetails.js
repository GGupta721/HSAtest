import React from "react";
import "./OccupantDetails.css"
import { toast } from 'react-toastify';


class OccupantDetails extends React.Component{

    state = {
        AllowContinue : true
    }

    authenticateResponses = () => {
            this.setState({AllowContinue: true});
        
            Object.entries(this.props.occupantValues).map((inputField) =>{
                // console.log(inputField);
                    if(inputField[1].length < 1 || inputField[1] === '' ){
                        this.setState({AllowContinue: false});
                    }


                })
            Object.entries(this.props.communityValues).map((inputField) =>{
                // console.log(inputField);
                    if(inputField[1].length < 1 || inputField[1] === '' ){
                        this.setState({AllowContinue: false});
                    }


                })
            
    }

    continue = async (eve) => {
            const result = await this.authenticateResponses();
            if(this.state.AllowContinue){
                    // console.log('once')
                    eve.preventDefault();
                    this.props.nextPage();
            }
            else if(this.state.AllowContinue===false){
                this.valdateQues("")
            }
    }

    valdateQues = (quesNum) => {

        toast.error(`Please provide an input for all the fields`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
        });
    }

    
    render(){
        const {occupantValues,communityValues, handleChange} = this.props;

        return (
            <div className="occupant-card center">
                <div className="oc-details ">
                    <div className="grid-OccupantDetails">
                        <div className="card grid-child">
                            Occupant's First Name:&emsp; <input type="text" placeholder= " Enter First Name" className="inputV3" defaultValue={occupantValues.firstName} onChange={handleChange('firstName')} /><p/>
                            Number of Occupants:&emsp; <input type="number" min="0" placeholder= " Number of Occupants" step="1" defaultValue={occupantValues.numOccupants} onChange={handleChange('numOccupants')}/><p/>
                            Number of Bedrooms:&emsp; <input type="number" min="0" placeholder= " Number of Bedrooms" step="1" defaultValue={occupantValues.numBedrooms} onChange={handleChange('numBedrooms')}/><p/>
                            Number of Floors:&emsp; <input type="number" min="0" placeholder= " Number of Floors" step="1" defaultValue={occupantValues.numFloors} onChange={handleChange('numFloors')}/><p/>
                            <br/><p/>

                        </div>
                        <div className="card grid-child">
                            Occupant's Last Name:&emsp; <input type="text" placeholder= " Enter Last Name" className="inputV3" defaultValue={occupantValues.lastName} onChange={handleChange('lastName')}/><p/>
                            Approximate Square Footage:&emsp; <input type="number" placeholder= " Enter value" min="0" step="0.1" defaultValue={occupantValues.approxSF} onChange={handleChange('approxSF')}/><p/>
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
                                Address:&emsp; <input type="text" placeholder=" Enter Unit Number" defaultValue={occupantValues.unitNum} onChange={handleChange('unitNum')}/>

                            </div>
                            <div className="cell-1">
                                Province/Territory:&emsp; <input type="text" placeholder=" Enter Province/Territory" defaultValue={occupantValues.province} onChange={handleChange('province')}/>

                            </div>
                            <div className="cell-9">
                                City:&emsp; <input type="text" placeholder=" Enter Street" defaultValue={occupantValues.street} onChange={handleChange('street')}/><p/> 

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