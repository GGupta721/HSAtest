 import React from "react";
import "./OccupantDetails.css"
import { toast } from 'react-toastify';


class OccupantDetails extends React.Component{

    state = {
        AllowContinue : true,
        AcknowledgeFalse : true

    }

    authenticateResponses = () => {
            this.setState({AllowContinue: true});
            this.setState({AcknowledgeFalse: true});
            
        
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
            Object.entries(this.props.AccessorValues).map((inputField) =>{
                // console.log(inputField);
                    if(inputField[1].length < 1 || inputField[1] === '' ){
                        this.setState({AllowContinue: false});
                        if(inputField[0] === 'Acknowledgement'){
                            this.setState({AcknowledgeFalse: false});
                        }

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
            else if(this.state.AllowContinue===false ){
                if( this.state.AcknowledgeFalse===false){
                    this.valdateAcknowledgement();
                }
                else{
                    this.valdateQues("");
                }

            }
            // else if(){
            //     this.valdateAcknowledgement();

            // }
    }

    valdateQues = (quesNum) => {

        toast.error(`Please provide an input for all the fields`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
        });
    }

    valdateAcknowledgement = () => {

        toast.error(`Please Acknowledge the privacy policy`, {
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
                            <label for="OccupantFirstName">Occupant's First Name:&emsp;</label>
                            <input type="text" id="OccupantFirstName" name="OccupantFirstName" placeholder= " Enter First Name" className="inputV3" defaultValue={occupantValues.firstName} onChange={handleChange('firstName')} /><p/>
                            <label for="NumberOccupants">Number of Occupants:&emsp;</label>
                            <input type="number" id="NumberOccupants" name="NumberOccupants" min="0" placeholder= " Number of Occupants" step="1" defaultValue={occupantValues.numOccupants} onChange={handleChange('numOccupants')}/><p/>
                            <label for="NumberBedrooms">Number of Bedrooms:&emsp;</label>
                            <input type="number" id="NumberBedrooms" name="NumberBedrooms" min="0" placeholder= " Number of Bedrooms" step="1" defaultValue={occupantValues.numBedrooms} onChange={handleChange('numBedrooms')}/><p/>
                            <label for="NumberFloors">Number of Floors:&emsp;</label>
                            <input type="number" id="NumberFloors" name="NumberFloors" min="0" placeholder= " Number of Floors" step="1" defaultValue={occupantValues.numFloors} onChange={handleChange('numFloors')}/><p/>
                            <br/><p/>

                        </div>
                        <div className="card grid-child">
                            <label for="OccupantLastName">Occupant's Last Name:&emsp;</label>
                            <input type="text" id="OccupantLastName" name="OccupantLastName" placeholder= " Enter Last Name" className="inputV3" defaultValue={occupantValues.lastName} onChange={handleChange('lastName')}/><p/>
                            <label for="ApproximateSquareFootage">Approx Square foot:&emsp;</label>
                            <input type="number" id="ApproximateSquareFootage" name="ApproximateSquareFootage" placeholder= " Enter value(Min. 500)" min="500" step="0.1" defaultValue={occupantValues.approxSF} onChange={handleChange('approxSF')}/><p/>
                            <label for="HouseType">House Type:&emsp;</label>
                            <select type="dropdown" id="HouseType" name="HouseType" defaultValue={occupantValues.houseType} onChange={handleChange('houseType')}>
                                <option value="Owned">Private Owned</option>
                                <option value="Rented">Rental</option>
                                <option value="Band Housing">Band Housing</option>
                            </select><br/> 
                            
                        </div>

                        
                    </div>
                    <div className="address-card grid-child ">                    
                        <div className="grid-AddressDetails">
                            <div className="cell-1">
                                <label for="Address">Address:&emsp;</label>
                                <input type="text" id="Address" name="Address" autoComplete="No" placeholder=" Enter Unit Number" defaultValue={occupantValues.unitNum} onChange={handleChange('unitNum')}/>

                            </div>
                            <div className="cell-1">
                                <label for="Province/Territory">Province/Territory:&emsp;</label>
                                <input type="text" id="Province/Territory" name="Province/Territory" autoComplete="No" placeholder=" Enter Province/Territory" defaultValue={occupantValues.province} onChange={handleChange('province')}/>

                            </div>
                            <div className="cell-9">
                                <label for="City">City:&emsp;</label>
                               <input type="text" id="City" name="City" placeholder=" Enter Street" autoComplete="No" defaultValue={occupantValues.street} onChange={handleChange('street')}/><p/> 

                            </div> 
                            <div className="cell-2">
                                <label for="Postal Code">Postal Code:&emsp;</label>
                                <input type="text" id="Postal Code" name="Postal Code" placeholder=" Enter Postal Code" autoComplete="No" defaultValue={occupantValues.postalCode} onChange={handleChange('postalCode')}/>
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