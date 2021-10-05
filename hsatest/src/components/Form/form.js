import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";
import Router from "../Router";
import Report from "./Report/Report";
import NavigationLink from "../NavigationLink";

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
        Territory: null,
        Province: null
    }

    provinceHandler = (event) => {
        this.setState({ Province: event})
        console.log("horay")

    }

    territoryHandler = () => {
        
    }  

    // shouldComponentUpdate(nextProps, nextState)


    render() {
        return (
            <div className="form-div">
            <p/>
                <div className="form">
                    <form  onSubmit={this.handleSubmit}>
                        <div>
                            <Router pathName = "/details">
                                <div className="rightIndent">
                                    &nbsp;<input type="checkbox" className="inputV5"/>
                                    I Acknowledge Reading This Instruction; <br/><br/>&emsp;&nbsp;&nbsp;&nbsp;
                                    Assessor's First Name: <input type="text" name="fname" className="inputV1"/>&nbsp;&emsp; 
                                    Assessor's Last Name: <input type="text" name="lname" className="inputV1" />&nbsp;&emsp;
                                    Date: <input type="Date" className="inputV4"/>
                                </div>
                                <p/>
                                <div className="details db">
                                    <h1 className="blue"> Occupant's Details</h1><p/>
                                    <OccupantDetails provincehandler={this.provinceHandler}/>
                                </div><p/>
                                <div className="details db">
                                    <h1 className="blue"> Community Details</h1><p/>
                                    <CommunityDetails territory="NU" province="British Columbia"/>
                                </div>
                                <div className="NavLinks next blue">
                                    <NavigationLink href="/exterior">Next <i class="arrow right icon"/></NavigationLink>
                                    {/* <NavigationLink href="/exterior"></NavigationLink> */}
                                </div>
                                

                            </Router>
                        </div><p/>
                        <Router pathName = "/exterior">
                            <div className="exterior db">
                                <h1 className="blue"> Exterior Details</h1><p/>
                                <Exterior/>
                            </div>
                            <div className="NavLinks previous">
                                <NavigationLink href="/details"> <i class="arrow left icon"/> Previous</NavigationLink>
                            </div>
                            <div className="NavLinks next">
                                <NavigationLink href="/interior">Next <i class="arrow right icon"/></NavigationLink>
                            </div>
                        </Router>
                        <br/>

                        <Router pathName = "/interior">
                            <div className="interior db">
                                <h1 className="blue"> Interior Details</h1><p/>
                                <InteriorDetails/>
                            </div>

                            <div className="NavLinks previous">
                                <NavigationLink href="/exterior">  <i class="arrow left icon"/> Previous</NavigationLink>
                            </div>
                            <div className="NavLinks next">
                                <NavigationLink href="/report" className="ui primary button submitButton">Submit</NavigationLink>
                            </div>
                            <br/>
                        </Router>
                        <br/>

                        {/* <input type="submit" value="submit"></input> */}
                    </form>
                    <Router pathName = "/report">      
                        <div className="report db">
                            <h1 className="blue">Report</h1>
                            <Report/>
                        </div>
                        
                        <div className="NavLinks previous">
                            <NavigationLink href="/interior"> <i class="arrow left icon"/> Previous</NavigationLink>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Form
