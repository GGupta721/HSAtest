import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";
import Router from "../Router";
import Report from "./Report/Report";
import NavigationLink from "../NavigationLink";
import {
    Responsive,
    isMobileDevice,
    isTabletDevice,
    isLaptopDevice
  } from "responsive-react";

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
        // console.log(input);
        // console.log(this.state.testing);

    };
    

    render() {

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
                            <CommunityDetails territory="NU" province="British Columbia" handleChange ={this.handleChange} testCase={test} communityValues = {communityValues} nextPage= {this.nextPage}/>
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
                        <Report prevPage={this.prevPage}/>
                    </div>

                );

    
        }

        // return (
        //     <div className="form-div">
        //     <p/>
        //         <div className="form">
        //             <form  onSubmit={this.handleSubmit}>
                        
        //                 <Router pathName = "/">
        //                     <div className="rightIndent">
        //                         &nbsp;<input type="checkbox" className="inputV5"/>
        //                         I Acknowledge Reading This Instruction; <br/><br/>&emsp;&nbsp;&nbsp;&nbsp;
        //                         Assessor's First Name: <input type="text" name="fname" className="inputV1"/>&nbsp;&emsp; 
        //                         Assessor's Last Name: <input type="text" name="lname" className="inputV1" />&nbsp;&emsp;
        //                         Date: <input type="Date" className="inputV4"/>
        //                     </div>
        //                     <p/>
        //                     <div className="details db">
        //                         <h1 className="blue"> Community Details</h1><p/>
        //                         <CommunityDetails territory="NU" province="British Columbia" handleChange ={this.handleChange} communityValues = {communityValues}/>
        //                     </div><p/>
        //                     <div className="details db">
        //                         <h1 className="blue"> Occupant's Details</h1><p/>
        //                         <OccupantDetails handleChange ={this.handleChange} occupantValues = {occupantValues}/>
        //                     </div>
                            
        //                     <div className="NavLinks next blue">
        //                         <NavigationLink href="/exterior">Next <i class="arrow right icon"/></NavigationLink>
        //                         {/* <NavigationLink href="/exterior"></NavigationLink> */}
        //                     </div>
                            

        //                 </Router>
                        
        //                 <Router pathName = "/exterior">
        //                     <div className="exterior db">
        //                         <h1 className="blue"> Exterior Details</h1><p/>
        //                         <Exterior/>
        //                     </div>
        //                     <div className="NavLinks previous">
        //                         <NavigationLink href="/"> <i class="arrow left icon"/> Previous</NavigationLink>
        //                     </div>
        //                     <div className="NavLinks next">
        //                         <NavigationLink href="/interior">Next <i class="arrow right icon"/></NavigationLink>
        //                     </div>
        //                 </Router>
        //                 <br/>

        //                 <Router pathName = "/interior">
        //                     <div className="interior db">
        //                         <h1 className="blue"> Interior Details</h1><p/>
        //                         <InteriorDetails/>
        //                     </div>

        //                     <div className="NavLinks previous">
        //                         <NavigationLink href="/exterior">  <i class="arrow left icon"/> Previous</NavigationLink>
        //                     </div>
        //                     <div className="NavLinks next">
        //                         <NavigationLink href="/report" className="ui primary button submitButton">Submit</NavigationLink>
        //                     </div>
        //                     <br/>
        //                 </Router>
        //                 <br/>

        //                 {/* <input type="submit" value="submit"></input> */}
        //             </form>
        //             <Router pathName = "/report">      
        //                 <div className="report db">
        //                     <h1 className="blue">Report</h1>
        //                     <Report/>
        //                 </div>
                        
        //                 <div className="NavLinks previous">
        //                     <NavigationLink href="/interior"> <i class="arrow left icon"/> Previous</NavigationLink>
        //                 </div>
        //             </Router>
        //         </div>
        //     </div>
        // );
    }
}

export default Form
