import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";
// import Router from "../Router";
import Report from "./Report/Report";
import { FNAddress } from "./details/communityDetails";

import {result} from "./test";


// import NavigationLink from "../NavigationLink";

class Form extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: 'Your filled form has been submitted.',
    //       territory: null,
    //       province: null

    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }    
    //   handleSubmit(event) {
    //     alert('An essay was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    state = {
        page: 1,
        testing: 'test',
        
        firstName:'',
        lastName:'',
        numOccupants:null,
        numBedrooms:null,
        numFloors:null,
        approxSF:null,
        houseType:'',
        street:'',
        unitNum:'',
        postalCode:'',
        province:'',
    
        community:'',
        bandNum:null,

        q1:null,
        q1Comments:'',
        q2:null,
        q2Comments:'',
        q3:null,
        q3Comments:'',
        q4:null,
        q4Comments:'',
        q5:null,
        q5Comments:'',
        q6:null,
        q6Comments:'',
        q7:null,
        q7Comments:'',

        q8:null,
        q8a:null,
        q8Comments:'',
        q9:null,
        q9Comments:'',
        q10:null,
        q10Comments:'',
        q11:null,
        q11Comments:'',
        q11Name:'',
        q11PhoneNum:null,
        q12:null,
        q12Comments:'',
        q13:null,
        q13Comments:'',
        q14:null,
        q14Comments:'',
        q15:null,
        q15Comments:'',
        q16:null,
        q16Comments:'',
        q17:null,
        q17Comments:'',
        q18:null,
        q18Comments:'',
        q19:null,
        q19Comments:'',
        q20:null,
        q20Comments:'',
        q21:null,
        q21Comments:'',
        q22:null,
        q22Comments:'',
        q23:null,
        q23Comments:'',
        q24:null,
        q24Comments:'',
        q25:null,
        q25Comments:'',
        q26:null,
        q26Comments:'',
        q27:null,
        q27Comments:'',
        q28:null,
        q28Comments:'',
        q29:null,
        q29Comments:'',
        q30:null,
        q30Comments:'',
    }

    // Proceed to next step
    nextPage = () => {
        const { page } = this.state;
        this.setState({
            page: page + 1
        });
    };

    // Go back to prev step
    prevPage = () => {
        const { page } = this.state;
        this.setState({
            page: page - 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });

        // this.setState({testing:this.state([input])});
        console.log(input);
        // console.log(this.state.testing);

    };

    bandNumHandlerChange = (FNAddress) => {
        // eve.preventDefault();
        //console.log(this.state.searchText);
        console.log(FNAddress);
        this.setState({community: FNAddress.Name});
        this.setState({postalCode: FNAddress.PostalCode});
        this.setState({street: FNAddress.City});
        this.setState({province: FNAddress.Province});
        this.setState({bandNum: FNAddress.BandNum});
        this.setState({unitNum: FNAddress.Address});
        
        
        // this.props.handleChange(eve.target.value, eve);
    }
    

    render() {

        // var result = [];
        // function csvJSON(Comprehensivedata){

        //     var lines=Comprehensivedata.split("\n");
          
            
          
        //     // NOTE: If your columns contain commas in their values, you'll need
        //     // to deal with those before doing the next step 
        //     // (you might convert them to &&& or something, then covert them back later)
        //     // jsfiddle showing the issue https://jsfiddle.net/
        //     var headers=lines[0].split(",");
          
        //     for(var i=1;i<lines.length;i++){
          
        //         var obj = {};
        //         var currentline=lines[i].split(",");
          
        //         for(var j=0;j<headers.length;j++){
        //             obj[headers[j]] = currentline[j];
        //         }
          
        //         result.push(obj);
          
        //     }
          
        //     return result; //JavaScript object
        //     //return JSON.stringify(result); //JSON
        //   }
        
        // const fs= require('fs');
        // const csv= require('csvtojson');
        // const {Parser}= require('json2csv');

        // // (async()=>{
        //     const bandinfo=  csv().fromFile("Comprehensivedata.csv");
        //     // console.log(bandinfo);
        // // })();

        //Test cases
        const {testing} = this.state;
        const test = {testing};


        const {page} = this.state;
        const { firstName, lastName, numOccupants, numBedrooms, numFloors, approxSF, houseType, street, unitNum, postalCode} = this.state;
        const { community, bandNum} = this.state;
        const {q1, q1Comments, q2, q2Comments, q3, q3Comments, q4, q4Comments, q5, q5Comments, q6, q6Comments, q7, q7Comments} = this.state;
        const {q8, q8a, q8Comments, q9, q9Comments, q10, q10Comments, q11, q11Comments, q11Name, q11PhoneNum, q12, q12Comments, q13, q13Comments, q14, q14Comments, q15, q15Comments, q16, q16Comments, q17, q17Comments, q18, q18Comments, q19, q19Comments, q20, q20Comments, q21, q21Comments, q22, q22Comments, q23, q23Comments, q24, q24Comments, q25, q25Comments, q26, q26Comments, q27, q27Comments, q28, q28Comments, q29, q29Comments, q30, q30Comments} = this.state;
        const occupantValues = { firstName, lastName, numOccupants, numBedrooms, numFloors, approxSF, houseType, street, unitNum, postalCode};
        const communityValues = {community, bandNum};
        const exteriorValues = {q1, q1Comments, q2, q2Comments, q3, q3Comments, q4, q4Comments, q5, q5Comments, q6, q6Comments, q7, q7Comments};
        const interiorValues = {q8, q8a, q8Comments, q9, q9Comments, q10, q10Comments, q11, q11Comments, q11Name, q11PhoneNum, q12, q12Comments, q13, q13Comments, q14, q14Comments, q15, q15Comments, q16, q16Comments, q17, q17Comments, q18, q18Comments, q19, q19Comments, q20, q20Comments, q21, q21Comments, q22, q22Comments, q23, q23Comments, q24, q24Comments, q25, q25Comments, q26, q26Comments, q27, q27Comments, q28, q28Comments, q29, q29Comments, q30, q30Comments};
        

        switch (page){

            case 1:
                return(
                    <div>
                        <div className="rightIndent">
                        &nbsp;<input type="checkbox" className="inputV5"/>
                        I Acknowledge Reading This Instruction; <br/><br/>&emsp;&nbsp;&nbsp;&nbsp;
                        Assessor's First Name: <input type="text" name="fname" className="inputV1"/>&nbsp;&emsp; 
                        Assessor's Last Name: <input type="text" name="lname" className="inputV1" />&nbsp;&emsp;
                        Date: <input type="Date" className="inputV4"/>
                        </div>
                        <p/>
                        <div className="details db">
                            <h1 className="blue"> Community Details</h1><p/>
                            <CommunityDetails territory="NU" province="British Columbia" handleChange ={this.handleChange} bandNumHandlerChange={this.bandNumHandlerChange} testCase={test} communityValues = {communityValues} nextPage= {this.nextPage}/>
                        </div><p/>
                        <div className="details db">
                            <h1 className="blue"> Occupant's Details</h1><p/>
                            <OccupantDetails handleChange ={this.handleChange} occupantValues = {occupantValues} nextPage= {this.nextPage}/>
                        </div>
                    </div>
                    

                );
            
            case 2:
                return(
                    <div className="exterior db">
                        <h1 className="blue"> Exterior Details</h1><p/>
                        <Exterior handleChange ={this.handleChange} exteriorValues = {exteriorValues} nextPage= {this.nextPage} prevPage={this.prevPage}/>
                    </div>

                );

            case 3:
                return(
                    <div>
                        <div className="interior db">
                            <h1 className="blue"> Interior Details</h1><p/>
                            <InteriorDetails handleChange ={this.handleChange} interiorValues = {interiorValues} nextPage= {this.nextPage} prevPage={this.prevPage}/>
                        </div>
                    </div>

                );

            case 4:
                return(
                    <div className="report db">
                        <h1 className="blue">Report</h1>
                        <Report prevPage={this.prevPage} interiorValues = {interiorValues} exteriorValues = {exteriorValues}/>
                    </div>

                );
            
            default:
                return(null);

    
        }

       
    }
}

export default Form
