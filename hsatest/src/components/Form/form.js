import {Component} from "react";
import "./form.css";
import OccupantDetails from "./details/occupantDetails";
import CommunityDetails from "./details/communityDetails";
import Exterior from "./Exterior/Exterior";
import InteriorDetails from "./InteriorDetails/InteriorDetails";
import Report from "./Report/Report";
import { FNAddress } from "./details/communityDetails";
import Router from "../Router";
import PolicyModal from "../assessment/PolicyModal";
import Acknowledge from "../acknowledgement/Acknowledge";
import axios from 'axios';
import emailjs from 'emailjs-com';

// import NavigationLink from "../NavigationLink";

class Form extends Component {
    
    submitHandler = () => {
        // var wb = XLSX.utils.book_new();
        // wb.Props = {
        //         Title: "SheetJS Tutorial",
        //         Subject: "Test",
        //         Author: "Red Stapler",
        //         CreatedDate: new Date(2017,12,19)
        // };
        
        // wb.SheetNames.push("Test Sheet");
        // var ws_data = [['hello' , 'world']];
        // var ws = XLSX.utils.aoa_to_sheet(ws_data);
        // wb.Sheets["Test Sheet"] = ws;
        // var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        // function s2ab(s) {
  
        //         var buf = new ArrayBuffer(s.length);
        //         var view = new Uint8Array(buf);
        //         for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        //         return buf;
                
        // }
        // // $("#button-a").click(function(){
        // //         saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
        // // });
        // saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');

       
        console.log("working!!");
        const methodAPI = 'https://ja8k38z2s3.execute-api.ca-central-1.amazonaws.com/dev/data-handler';
        const altAPI = "https://l83up4h02f.execute-api.ca-central-1.amazonaws.com/dev/formdata";
        // const api = `${methodAPI}/formdata`;
        // const data = JSON.stringify(this.state);
        const data = 
        {
            'emailID':'443',   
            'firstName':this.state.firstName,
            'lastName':this.state.lastName,
            'numOccupants':this.state.numOccupants,
            'numBedrooms':this.state.numBedrooms,
            'numFloors':this.state.numFloors,
            'approxSF':this.state.approxSF,
            'houseType':this.state.houseType,
            'street':this.state.street,
            'unitNum':this.state.unitNum,
            'postalCode':this.state.postalCode,
            'province':this.state.province,
        
            'community':this.state.community,
            'bandNum':this.state.bandNum,

            'q1':this.state.q1,
            'q1Comments':this.state.q1Comments,
            'q2':this.state.q2,
            'q2Comments':this.state.q2Comments,
            'q3':this.state.q3,
            'q3Comments':this.state.q3Comments,
            'q4':this.state.q4,
            'q4Comments':this.state.q4Comments,
            'q5':this.state.q5,
            'q5Comments':this.state.q5Comments,
            'q6':this.state.q6,
            'q6Comments':this.state.q6Comments,
            'q7':this.state.q7,
            'q7Comments':this.state.q7Comments,
            'q8':this.state.q8,
            'q8Comments':this.state.q8Comments,
            'q9':this.state.q9,
            'q9Comments':this.state.q9Comments,
            'q10':this.state.q10,
            'q10Comments':this.state.q10Comments,


            'q11':this.state.q11,
            'q12':this.state.q12,
            'q13':this.state.q13,
            'q14':this.state.q14,
            'q14Comments':this.state.q14Comments,
            'q15':this.state.q15,
            'q16':this.state.q16,
            'q17':this.state.q17,
            'q18':this.state.q18,
            'q18Comments':this.state.q18Comments,
            'q19':this.state.q19,
            'q20':this.state.q20,
            'q21':this.state.q21,
            'q22':this.state.q22,
            'q22Comments':this.state.q22Comments,
            'q23':this.state.q23,
            'q23Comments':this.state.q23Comments,
            'q24':this.state.q24,
            'q24Comments':this.state.q24Comments,
            'q25':this.state.q25,
            'q25Comments':this.state.q25Comments,
            'q26':this.state.q26,
            'q26Comments':this.state.q26Comments,
            'q27a':this.state.q27a,
            'q27b':this.state.q27b,
            'q27c':this.state.q27c,
            'q27d':this.state.q27d,
            
            'q28':this.state.q28,
            'q28Comments':this.state.q28Comments,
            'q29a':this.state.q29a,
            'q29b':this.state.q29b,
            'q29c':this.state.q29c,
            'q29d':this.state.q29d,
            'q29e':this.state.q29e,

            'q30':this.state.q30,
            'q30Comments':this.state.q30Comments,

            'q31Name':this.state.q31Name,
            'q31PhoneNum':this.state.q31PhoneNum,
            
            // 'q32':this.state.emailID,
            // 'q32Comments':this.state.emailID,
            // 'q33':this.state.emailID,
            // 'q33Comments':this.state.emailID,
            // 'q34':this.state.emailID,
            // 'q34Comments':this.state.emailID,
            // 'q35':this.state.emailID,
            // 'q35Comments':this.state.emailID,
            // 'q36':this.state.emailID,
            // 'q36Comments':this.state.emailID,
            // 'q37':this.state.emailID,
            // 'q37Comments':this.state.emailID,
            // 'q38':this.state.emailID,
            // 'q38Comments':this.state.emailID,
            // 'q39':this.state.emailID,
            // 'q39Comments':this.state.emailID,
            // 'q40':this.state.emailID,
            // 'q40Comments':this.state.emailID,
            // q41:null,
            // q41Comments:'',
            // q42:null,
            // q42Comments:'',
            // q43:null,
            // q43Comments:'',
            // q44:null,
            // q44Comments:'',
            // q45:null,
            // q45Comments:'',
            // q46:null,
            // q46Comments:'',
            // q47:null,
            // q47Comments:'',
            // q48:null,
            // q48Comments:'',
            // q49:null,
            // q49Comments:'',
            // q50:null,
            // q50Comments:'',
        }
        
        const headers = { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT"
        };

        axios.post(methodAPI, data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

        var templateParams = {
            to_name: 'James',
            from_name: 'GG',
            message: 'Wassssup!!'
        };

        const serviceID = 'service_6qd4iln';
        const templateID = 'template_88tatta';
        const userID = 'user_jOczu1og4rtveJixUCF5X';
        

         
        emailjs.send(serviceID, templateID, this.state, userID)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            })

              
    }

    state = {
        page: 1,
        testing: 'test',
        privacyPolicy: false,
        
        firstName:'',
        lastName:'',
        numOccupants: ' ',
        numBedrooms: ' ',
        numFloors: '',
        approxSF: '',
        houseType:'',
        street:'',
        unitNum:'',
        postalCode:'',
        province:'',
    
        community:'',
        bandNum: '',

        q1: '',
        q1Comments:'',
        q2: '',
        q2Comments:'',
        q3: '',
        q3Comments:'',
        q4: '',
        q4Comments:'',
        q5: '',
        q5Comments:'',
        q6: '',
        q6Comments:'',
        q7: '',
        q7Comments:'',
        q8: '',
        q8Comments:'',
        q9: '',
        q9Comments:'',
        q10: '',
        q10Comments:'',


        q11: '',
        q12:'',
        q13: '',
        q14: '',
        q14Comments:'',
        q15: '',
        q16:'',
        q17: '',
        q18: '',
        q18Comments:'',
        q19: '',
        q20:'',
        q21: '',
        q22: '',
        q22Comments:'',
        q23: '',
        q23Comments:'',
        q24: '',
        q24Comments:'',
        q25: '',
        q25Comments:'',
        q26: '',
        q26Comments:'',
        q27a: '',
        q27b: '',
        q27c: '',
        q27d: '',
        
        q28: '',
        q28Comments:'',
        q29a: '',
        q29b: '',
        q29c: '',
        q29d: '',
        q29e: '',

        q30: '',
        q30Comments:'',

        q31Name:'',
        q31PhoneNum: '',
        
        q32: '',
        q32Comments:'',
        q33: '',
        q33Comments:'',
        q34: '',
        q34Comments:'',
        q35: '',
        q35Comments:'',
        q36: '',
        q36Comments:'',
        q37: '',
        q37Comments:'',
        q38: '',
        q38Comments:'',
        q39: '',
        q39Comments:'',
        q40: '',
        q40Comments:'',
        q41: '',
        q41Comments:'',
        q42: '',
        q42Comments:'',
        q43: '',
        q43Comments:'',
        q44: '',
        q44Comments:'',
        q45: '',
        q45Comments:'',
        q46: '',
        q46Comments:'',
        q47: '',
        q47Comments:'',
        q48: '',
        q48Comments:'',
        q49: '',
        q49Comments:'',
        q50: '',
        q50Comments:'',
        InteriorBuildingSafety:0,
        InteriorLifeSafety:0,
        InteriorInjurySafety:0,
        InteriorHealthSafety:0,
        ExteriorBuildingSafety:0,
        ExteriorLifeSafety:0,
        ExteriorInjurySafety:0,
        ExteriorHealthSafety:0,
        Counter1:0,
        Counter2:0,
        Counter3:0,
        Counter4:0,
        Counter5:0,
        Counter24:0,
        Counter25:0,
        Counter26:0,
        Counter32:0,
        Counter33:0,
        Counter34:0,
        Counter35:0,
        Counter36:0,
        Counter37:0,
        Counter38:0,
        Counter39:0,
        Counter40:0,
        Counter41:0,
        Counter42:0,
        Counter43:0,
        Counter44:0,
        Counter45:0,
        Counter46:0,
        Counter47:0,
        Counter48:0,
        Counter49:0,
    }

    BuildingSafetyChange=(e)=>{
        const { InteriorBuildingSafety,ExteriorBuildingSafety,Counter1,Counter2,Counter3,Counter33,Counter36,Counter37,Counter38,Counter39,Counter40,Counter41,Counter42,Counter43,Counter44,Counter45, Counter46,Counter47,Counter48,  Counter49}= this.state;
        if(e.target.name==="q1"){
            if(e.target.value==="Yes"){
                    if(Counter1===0){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety+1,
                            Counter1:1
                            
                        })
                        
                    }

            }
            else {
                    if(Counter1===1){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety-1,
                            Counter1:0
                        })
                    }
            }
        }
        if(e.target.name==="q2"){
            if(e.target.value==="Yes"){
                    if(Counter2===0){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety+1,
                            Counter2:1
                            
                        })
                        
                    }

            }
            else {
                    if(Counter2===1){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety-1,
                            Counter2:0
                        })
                    }
            }
        }
        if(e.target.name==="q3"){
            if(e.target.value==="Yes"){
                    if(Counter3===0){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety+1,
                            Counter3:1
                            
                        })
                        
                    }

            }
            else {
                    if(Counter3===1){
                        this.setState({
                            ExteriorBuildingSafety:ExteriorBuildingSafety-1,
                            Counter3:0
                        })
                    }
            }
        }
        if(e.target.name==="q33"){
                if(e.target.value==="Yes"){
                        if(Counter33===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter33:1
                                
                            })
                            
                        }

                }
                else {
                        if(Counter33===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter33:0
                            })
                        }
                }
                console.log(this.state.BuildingSafety)
        }
        if(e.target.name==="q36"){
                if(e.target.value==="Yes"){
                        if(Counter36===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter36:1
                            })
                        }

                }
                else {
                        if(Counter36===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter36:0
                            })
                        }
                }

        }
        if(e.target.name==="q37"){
                if(e.target.value==="Yes"){
                        if(Counter37===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter37:1
                            })
                        }

                }
                else {
                        if(Counter37===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter37:0
                            })
                        }
                }
                

        }
        if(e.target.name==="q38"){
                if(e.target.value==="Yes"){
                        if(Counter38===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter38:1
                            })
                        }

                }
                else {
                        if(Counter38===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter38:0
                            })
                        }
                }

        }
        if(e.target.name==="q39"){
                if(e.target.value==="Yes"){
                        if(Counter39===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter39:1
                            })
                        }

                }
                else {
                        if(Counter39===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter39:0
                            })
                        }
                }

        }
        if(e.target.name==="q40"){
                if(e.target.value==="Yes"){
                        if(Counter40===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter40:1
                            })
                        }

                }
                else {
                        if(Counter40===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter40:0
                            })
                        }
                }

        }
        if(e.target.name==="q41"){
                if(e.target.value==="Yes"){
                        if(Counter41===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter41:1
                            })
                        }

                }
                else {
                        if(Counter41===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter41:0
                            })
                        }
                }

        }
        if(e.target.name==="q42"){
                if(e.target.value==="Yes"){
                        if(Counter42===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter42:1
                            })
                        }

                }
                else {
                        if(Counter42===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter42:0
                            })
                        }
                }

        }
        if(e.target.name==="q43"){
                if(e.target.value==="Yes"){
                        if(Counter43===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter43:1
                            })
                        }

                }
                else {
                        if(Counter43===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter43:0
                            })
                        }
                }

        }
        if(e.target.name==="q44"){
                if(e.target.value==="Yes"){
                        if(Counter44===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter44:1
                            })
                        }

                }
                else {
                        if(Counter44===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter44:0
                            })
                        }
                }

        }
        if(e.target.name==="q45"){
                if(e.target.value==="Yes"){
                        if(Counter45===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter45:1
                            })
                        }

                }
                else {
                        if(Counter45===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter45:0
                            })
                        }
                }

        }
        if(e.target.name==="q46"){
                if(e.target.value==="Yes"){
                        if(Counter46===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter46:1
                            })
                        }

                }
                else {
                        if(Counter46===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter46:0
                            })
                        }
                }

        }
        if(e.target.name==="q47"){
                if(e.target.value==="Yes"){
                        if(Counter47===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter47:1
                            })
                        }

                }
                else {
                        if(Counter47===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter47:0
                            })
                        }
                }

        }
        if(e.target.name==="q48"){
                if(e.target.value==="Yes"){
                        if(Counter48===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter48:1
                            })
                        }

                }
                else {
                        if(Counter48===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter48:0
                            })
                        }
                }

        }
        if(e.target.name==="q49"){
                if(e.target.value==="Yes"){
                        if(Counter49===0){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety+1,
                                Counter49:1
                            })
                        }

                }
                else {
                        if(Counter49===1){
                            this.setState({
                                InteriorBuildingSafety:InteriorBuildingSafety-1,
                                Counter49:0
                            })
                        }
                }

        }
}

LifeSafetyChange=(e)=>{
    const { InteriorLifeSafety,Counter24,Counter25,Counter32,Counter34}= this.state;
        if(e.target.name==="q24"){
                if(e.target.value==="Yes"){
                        if(Counter24===0){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety+1,
                                Counter24:1
                            })
                        }

                }
                else {
                        if(Counter24===1){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety-1,
                                Counter24:0
                            })
                        }
                }
        }

        if(e.target.name==="q25"){
                if(e.target.value==="Yes"){
                        if(Counter25===0){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety+1,
                                Counter25:1
                            })
                        }

                }
                else {
                        if(Counter25===1){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety-1,
                                Counter25:0
                            })
                        }
                }
        }

        if(e.target.name==="q32"){
                if(e.target.value==="Yes"){
                        if(Counter32===0){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety+1,
                                Counter32:1
                            })
                        }

                }
                else {
                        if(Counter32===1){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety-1,
                                Counter32:0
                            })
                        }
                }


        }

        if(e.target.name==="q34"){
                if(e.target.value==="Yes"){
                        if(Counter34===0){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety+1,
                                Counter34:1
                            })
                        }

                }
                else {
                        if(Counter34===1){
                            this.setState({
                                InteriorLifeSafety:InteriorLifeSafety-1,
                                Counter34:0
                            })
                        }
                }
        }
}

InjurySafetyChange=(e)=>{
    const { InteriorInjurySafety,ExteriorInjurySafety,Counter4,Counter5,Counter35}= this.state;
    if(e.target.name==="q4"){
        if(e.target.value==="Yes"){
                if(Counter4===0){
                    this.setState({
                        ExteriorInjurySafety:ExteriorInjurySafety+1,
                        Counter4:1
                    })
                }

        }
        else {
                if(Counter4===1){
                    this.setState({
                        ExteriorInjurySafety:ExteriorInjurySafety-1,
                        Counter4:0
                    })
                }
        }
    }

    if(e.target.name==="q5"){
        if(e.target.value==="Yes"){
                if(Counter5===0){
                    this.setState({
                        ExteriorInjurySafety:ExteriorInjurySafety+1,
                        Counter5:1
                    })
                }

        }
        else {
                if(Counter4===5){
                    this.setState({
                        ExteriorInjurySafety:ExteriorInjurySafety-1,
                        Counter5:0
                    })
                }
        }
    }
        if(e.target.name==="q35"){
                if(e.target.value==="Yes"){
                        if(Counter35===0){
                            this.setState({
                                InteriorInjurySafety:InteriorInjurySafety+1,
                                Counter35:1
                            })
                        }

                }
                else {
                        if(Counter35===1){
                            this.setState({
                                InteriorInjurySafety:InteriorInjurySafety-1,
                                Counter35:0
                            })
                        }
                }
        }
    }

    HealthSafetyChange=(e)=>{
        const { InteriorHealthSafety,Counter26}= this.state;
            if(e.target.name==="q26"){
                    if(e.target.value==="Yes"){
                            if(Counter26===0){
                                this.setState({
                                    InteriorHealthSafety:InteriorHealthSafety+1,
                                    Counter26:1
                                })
                            }
    
                    }
                    else {
                            if(Counter26===1){
                                this.setState({
                                    InteriorHealthSafety:InteriorHealthSafety-1,
                                    Counter26:0
                                })
                            }
                    }
            }
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
        
        this.setState({bandNum: FNAddress.BandNum});
        this.setState({unitNum: FNAddress.Address});
        this.setState({province: FNAddress.Region});
        
        
        // console.log(FNAddress.Region);
        // if(FNAddress.Region === 'BC'){
        //     this.setState({province: "British Columbia"});

        // }

        
        
        
        // this.props.handleChange(eve.target.value, eve);
    }
    
    // submitHandler = () => {
    //     console.log("working!!");
        
    // }

    render() {


        //Test cases
        const {testing} = this.state;
        const test = {testing};


        const {page} = this.state;
        let {privacyPolicy} = this.state;

        const { firstName, lastName, numOccupants, numBedrooms, numFloors, approxSF, houseType, street, unitNum, postalCode, province} = this.state;
        const { community, bandNum} = this.state;
        const {q1, q1Comments, q2, q2Comments, q3, q3Comments, q4, q4Comments, q5, q5Comments, q6, q6Comments, q7, q7Comments, q8, q8Comments, q9, q9Comments, q10, q10Comments,ExteriorBuildingSafety,ExteriorInjurySafety} = this.state;
        const {q11, q12, q13, q14, q14Comments, q15, q16, q17, q18, q18Comments, q19, q20, q21, q22, q22Comments, q23, q23Comments, q24, q24Comments, q25, q25Comments, q26, q26Comments, q27a, q27b, q27c, q27d, q28, q28Comments, q29a, q29b, q29c, q29d, q30, q30Comments, q31Name, q31PhoneNum, q32, q32Comments, q33, q33Comments, q34, q34Comments, q35, q35Comments, q36, q36Comments, q37, q37Comments, q38, q38Comments, q39, q39Comments, q40, q40Comments, q41, q41Comments, q42, q42Comments, q43, q43Comments, q44, q44Comments, q45, q45Comments, q46, q46Comments, q47, q47Comments, q48, q48Comments, q49, q49Comments, q50, q50Comments,
            InteriorBuildingSafety,InteriorLifeSafety,InteriorHealthSafety,InteriorInjurySafety,Counter24,Counter25,Counter26,Counter32,Counter33,Counter34,Counter36,Counter37,Counter38,Counter39,Counter40,Counter41,Counter42,Counter43,Counter44,Counter45, Counter46,Counter47,Counter48,  Counter49} = this.state;
        
        const occupantValues = { firstName, lastName, numOccupants, numBedrooms, numFloors, approxSF, houseType, street, unitNum, postalCode, province};
        const communityValues = {community, bandNum};
        const exteriorValues = {q1, q1Comments, q2, q2Comments, q3, q3Comments, q4, q4Comments, q5, q5Comments, q6, q6Comments, q7, q7Comments, q8, q8Comments, q9, q9Comments, q10, q10Comments,ExteriorBuildingSafety,ExteriorInjurySafety};
        const interiorValues = {q11, q12, q13, q14, q14Comments, q15, q16, q17, q18, q18Comments, q19, q20, q21, q22, q22Comments, q23, q23Comments, q24, q24Comments, q25, q25Comments, q26, q26Comments, q27a, q27b, q27c, q27d, q28, q28Comments, q29a, q29b, q29c, q29d, q30, q30Comments, q31Name, q31PhoneNum, q32, q32Comments, q33, q33Comments, q34, q34Comments, q35, q35Comments, q36, q36Comments, q37, q37Comments, q38, q38Comments, q39, q39Comments, q40, q40Comments, q41, q41Comments, q42, q42Comments, q43, q43Comments, q44, q44Comments, q45, q45Comments, q46, q46Comments, q47, q47Comments, q48, q48Comments, q49, q49Comments, q50, q50Comments,
            InteriorBuildingSafety,InteriorLifeSafety,InteriorHealthSafety,InteriorInjurySafety,Counter24,Counter25,Counter26,Counter32,Counter33,Counter34,Counter36,Counter37,Counter38,Counter39,Counter40,Counter41,Counter42,Counter43,Counter44,Counter45, Counter46,Counter47,Counter48,  Counter49};
        const reportValues ={ InteriorBuildingSafety,InteriorLifeSafety,InteriorHealthSafety,InteriorInjurySafety,ExteriorBuildingSafety,ExteriorInjurySafety};

        switch (page){

            // case privacyPolicy:
            //     return(
            //         <Router pathName = "/policy">
            //                  <div className="exterior db">
            //                      <h1 className="blue"> Privacy Policy</h1><p/>
            //                      <PolicyModal/>
            //                  </div>
                             
            //         </Router>
            // );

            case 1:
                return(
                    <div>
                        <div className="acknowledge db">
                            <Acknowledge/>
                        </div>
                        <div className="rightIndent">
                            {/* &nbsp;<input type="checkbox" className="inputV5"/>
                            I Acknowledge Reading This Instruction; &nbsp;
                            <a href="https://indigenousfiresafety.ca/nirs-privacy-policy/" target="_blank">Click to read*</a>
                                                
                            <br/><br/>&emsp;&nbsp;&nbsp;&nbsp; */}
                            <br/> &emsp;&nbsp;&nbsp;&nbsp; &emsp;&nbsp;&nbsp;&nbsp; &emsp;&nbsp;&nbsp;&nbsp;
                            Assessor's First Name: <input type="text" name="fname" className="inputV7"/>&nbsp;&emsp; 
                            Assessor's Last Name: <input type="text" name="lname" className="inputV7" />&nbsp;&emsp;
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
                        <Exterior handleChange ={this.handleChange} exteriorValues = {exteriorValues} nextPage= {this.nextPage} BuildingSafetyChange={this.BuildingSafetyChange} LifeSafetyChange={this.LifeSafetyChange} InjurySafetyChange={this.InjurySafetyChange} HealthSafetyChange={this.HealthSafetyChange} prevPage={this.prevPage}/>
                    </div>

                );

            case 3:
                return(
                    <div>
                        <div className="interior db">
                            <h1 className="blue"> Interior Details</h1><p/>
                            <InteriorDetails handleChange ={this.handleChange} submitHandler={this.submitHandler} interiorValues = {interiorValues} nextPage= {this.nextPage} BuildingSafetyChange={this.BuildingSafetyChange} SuLifeSafetyChange={this.LifeSafetyChange} InjurySafetyChange={this.InjurySafetyChange} HealthSafetyChange={this.HealthSafetyChange} prevPage={this.prevPage}/>
                        </div>
                    </div>

                );

            case 4:
                return(
                    <div className="report db">
                        <h1 className="blueReport">Report</h1>
                        <Report prevPage={this.prevPage} reportValues = {reportValues} exteriorValues = {exteriorValues}/>
                    </div>

                );
            
            
            
            
            default:
                return( '');

    
        }

       
    }
}

export default Form
