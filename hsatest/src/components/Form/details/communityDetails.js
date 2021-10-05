import React from "react";
import Province from "./province"
import Territory from "./territory";
import "./CommunityDetails.css"


class CommunityDetails extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        community: null,
        phoneNum: null,
        altContact: null,
        repEmail: null,
        bandNum: "",
        province: this.props.province,
        territory: this.props.territory,
    }
    
    render(){
        return(
            <div className="community-card center">
                <div className="co-details">
                    <div className="cell-1">
                        Community:&emsp; <input type="text" placeholder=" Enter Community Name" className="inputV2" value={this.state.community} onChange={eve => this.setState({community: eve.target.value})}/>
                    </div><br/>
                    
                    <div class="grid-CommunityDetails">
                        
                        <div className="cell-2">
                            Representative First Name:&emsp; <input type="text" placeholder=" Enter First Name" className="inputV3" value={this.state.firstName} onChange={eve => this.setState({firstName: eve.target.value})}/>
                        </div>
                        <div className="cell-3">
                            Representative Last Name:&emsp; <input type="text" placeholder=" Enter Last Name" className="inputV3" value={this.state.lastName} onChange={eve => this.setState({lastName: eve.target.value})}/>
                        </div>
                        <div className="cell-4">
                            Phone Number:&emsp; <input type="tel" placeholder=" Enter Phone Number" value={this.state.phoneNum} onChange={eve => this.setState({phoneNum: eve.target.value})}/>
                        </div>
                        <div className="cell-5">
                            Alternative contact detail:&emsp; <input type="text" placeholder=" Enter Contact" value={this.state.altContact} onChange={eve => this.setState({altContact: eve.target.value})}/>
                        </div>
                        <div className="cell-6">
                            Representative Email:&emsp; <input type="email" placeholder=" Enter Email" value={this.state.repEmail} onChange={eve => this.setState({repEmail: eve.target.value})}/>
                        </div>
                        <div className="cell-7">
                            Band Number:&emsp; <input type="value" maxLength="3" placeholder=" Enter Band Number" value={this.state.bandNum} onChange={eve => this.setState({bandNum: eve.target.value})}/>
                        </div>
                        <div className="cell-8">
                            Province:&emsp; 
                            <input type= "text" value={this.state.province} readonly/>
                        </div>                        
                        <div className="cell-9">
                            Territory:&emsp; <Territory />
                            {/* <input type= "text" value={this.state.territory} readonly/> */}
                        </div>  
                        
                    </div>
                    
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default CommunityDetails;