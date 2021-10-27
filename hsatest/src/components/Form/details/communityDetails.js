import React from "react";
// import Province from "./province"
// import Territory from "./territory";
import "./CommunityDetails.css";
// import FNAddress from "../../FirstNationDB";
import FirstNationDB from "../../FirstNationDB";

export class FNAddress {
    constructor(Name, BandNum, Region, Address, City, Province, PostalCode) {
      this.Name = Name;
      this.BandNum = BandNum;
      this.Region = Region;
      this.Address = Address;
      this.City = City;
      this.Province = Province;
      this.PostalCode = PostalCode;

    }
}

class CommunityDetails extends React.Component{

    constructor( props ){
        super( props );
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            FNAddressDB: [],
            BandNumList: []
        }
    
    }

    
        
    // getFirstNationData = (database) => {
    //     // this.setState({Db:db});
    //     console.log("GOT HERE !!!")
    //     this.setState({DB:this.state.FNAddressDB.concat(database)});
    //     // console.log(database.map((FNAdd) => (FNAdd.Province)))
        

    // }

    //temporary solution
    componentDidMount = () => {
        this.updateDB();
        // this.updateBNL();
        // this.props.getFirstNationData(this.state.DB);
  
    }

    bandNumInputHandler = (eve) => {
        // eve.preventDefault();
        //console.log(this.state.searchText);
        // console.log("bandNumInputHandler")
        this.state.FNAddressDB.map(FNAdd => {
            if (FNAdd.BandNum === eve.target.value){
                this.props.bandNumHandlerChange(FNAdd);
            }
            
        })
        


    }
  
    updateDB = () => {
        var tempDB = [];
        var tempFNDB = [];
        tempDB.push( new FNAddress('Fort McKay First Nation', '467', 'AB',	'PO BOX 5360', 'FORT MCMURRAY', 'AB', 'T9H 3G4'));
        tempDB.push( new FNAddress('Fort McMurray #468 First Nation', '468', 'AB',	'PO BOX 6130, STN MAIN', 'FORT MCMURRAY', 'AB',	'T9H 4W1'));
        tempDB.push( new FNAddress('Frog Lake',	'465',	'AB', 'GENERAL DELIVERY', 'FROG LAKE', 'AB', 'T0A 1M0'));
        tempDB.push( new FNAddress('Heart Lake', '469',	'AB', 'PO BOX 447', 'LAC LA BICHE',	'AB','T0A 2C0'));
        tempDB.push( new FNAddress('Sturgeon Lake Cree Nation',	'455', 'AB', 'PO BOX 757',	'VALLEYVIEW', 'AB',	'T0H 3N0'));
        tempDB.push( new FNAddress('Beecher Bay','640','BC','4901B EAST SOOKE ROAD','SOOKE','BC','V9Z 1B6'));
        tempDB.push( new FNAddress('Binche Whut\'en','730','BC','204 Mandine Drive, PO Box 2039','Fort St. James','BC','V0J 1P0'));
        tempDB.push( new FNAddress('Blueberry River First Nations','547','BC','PO BOX 3009','BUICK CREEK','BC','V0C 2R0'));
        tempDB.push( new FNAddress('Bonaparte','686','BC','PO BOX 669','CACHE CREEK','BC','V0K 1H0'));
        tempDB.push( new FNAddress('Boothroyd','700','BC','PO BOX 70','BOSTON BAR','BC','V0K 1C0'));


        // console.log(tempDB)
        this.setState({FNAddressDB:this.state.FNAddressDB.concat(tempDB)});
        this.updateBNL();
        tempDB.map(FNAdd => {
            tempFNDB.push(FNAdd.BandNum);
            // this.setState({BandNumLisst:this.state.BandNumList.concat(FNAdd.BandNum)});
        })
        // console.log(tempFNDB[0])
        this.setState({BandNumList:this.state.BandNumList.concat(tempFNDB)});



    
    }

    updateBNL = () => {
        // var tempDB = [];
        this.state.FNAddressDB.map(FNAdd => {
            // tempDB.push(FNAdd);
            this.setState({BandNumList:this.state.BandNumList.concat(FNAdd.BandNum)});
        })
        // console.log(tempDB[0]);

    }

    
    render(){
        const {communityValues, handleChange} = this.props;

        return(
            
            <div className="community-card center">
                <div className="co-details">
                    {/* <FirstNationDB getFirstNationData = {this.getFirstNationData}/> */}
                    <div className="cell-1">
                        Community:&emsp; <input type="text" placeholder=" Enter Community Name" className="inputV2" defaultValue={communityValues.community} onChange={handleChange('community')} />
                        {/* <b>{this.state.Db[0].Region}</b> */}
                    </div><br/>
                    
                    <div className="grid-CommunityDetails">
                        {/* <div className="cell-7">
                            Band Number:&emsp; <input type="value" maxLength="3" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={this.bandNumInputHandler}/>
                        </div>      */}
                        {/* <div className="cell-8">
                            <h1>{this.state.FNAddressDB.map((FNAdd) => (FNAdd.Region))}</h1>
                        </div>                   */}
                        <div className="cell-7">
                            Band Number:&emsp; <select maxLength="3" placeholder=" Enter Band Number" defaultValue={communityValues.bandNum} onChange={this.bandNumInputHandler}>
                                {this.state.BandNumList.map(lst => (
                                    <option>{lst}</option>
                                ))}                              
                            </select>
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
            </div>
            
        );
    }
}

export default CommunityDetails;