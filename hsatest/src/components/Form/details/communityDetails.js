import React from "react";
import Province from "./province"
import Territory from "./territory";
import "./CommunityDetails.css"


class CommunityDetails extends React.Component{

    // state = {
    //     community: null,
    //     bandNum: "",
    //     province: this.props.province,
    //     territory: this.props.territory,
    // }

    


    
    render(){
        const {communityValues, handleChange, testCase} = this.props;

        return(
            <div className="community-card center">
                <div className="co-details">
                    <div className="cell-1">
                        Community:&emsp; <input type="text" placeholder=" Enter Community Name" className="inputV2" defaultValue={communityValues.community} onChange={handleChange('community')} />
                    </div><br/>
                    
                    <div class="grid-CommunityDetails">
                        
                        
                        <div className="cell-7">
                            Band Number:&emsp; <input type="value" maxLength="3" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={handleChange('bandNum')}/>
                        </div>
                        <div className="cell-8">
                            Province:&emsp; 
                            <input type= "text" />
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