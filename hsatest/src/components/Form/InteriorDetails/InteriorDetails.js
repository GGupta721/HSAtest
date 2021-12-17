// import { Component } from  "react"
import React from "react"
import "./InteriorDetails.css"
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';

class InteriorDetails extends React.Component{

        state= {
                disabled: true,
                disabledq27: true,
                disabledq28:true,
                AllowContinue : true,
                emptyFlag: false,
                

                disabledSmoke: true,
                disabledCO:true,
                disabledSmokeCO: true,

        }

        authenticateResponses = () => {
                const noRespArr = [];
                const noCommArr = [];
                const emptyRespArr = [];
                this.setState({AllowContinue: true});
                this.setState({emptyFlag: false});

               
                Object.entries(this.props.interiorValues).map((ques) =>{
                        if(ques[0].includes("q") && !ques[0].includes("Comments") ){
                                if (ques[1] === 'No' ||  ques[1] === 'N/A'){
                                        noRespArr.push(ques[0]);
                                }  
                        }

                        })
                Object.entries(this.props.interiorValues).map((ques) =>{
                        noRespArr.map((entry)=>{
                                // console.log(entry)
                                if (ques[0].includes(entry) && ques[0].includes("Comments") && ques[0].match(/(\d+)/)[0] === entry.match(/(\d+)/)[0] ){
                                        if(ques[1].length < 1 || ques[1] === ''){
                                                // console.log("bad!", ques)
                                                noCommArr.push(entry);
                                                this.setState({AllowContinue: false});
                                        }
                                }
                        })
                })

                Object.entries(this.props.interiorValues).map((inputField) =>{
                        let flag = false;
                        
                        const inputName = inputField[0];
                        const inputValue = inputField[1];

                        if (inputName.includes("q") && !inputName.includes("Comments")){
                                
                                if(inputName==="q12" || inputName==="q13" || inputName==="q14"){
                                        flag = true;
                                        if(!this.state.disabledSmoke){
                                                
                                                if(inputValue.length < 1 || inputValue === '' ){
                                                        this.setState({AllowContinue: false});
                                                        this.setState({emptyFlag: true});
                                                        emptyRespArr.push(inputName);
                                                }
                                        }


                                }

                                if(inputName==="q16" || inputName==="q17" || inputName==="q18"){
                                        flag = true;
                                        if(!this.state.disabledCO){
                                                if(inputValue.length < 1 || inputValue === '' ){
                                                        this.setState({AllowContinue: false});
                                                        this.setState({emptyFlag: true});
                                                        emptyRespArr.push(inputName);
                                                }
                                        }
                                        

                                }
                                if( inputName ==="q20" || inputName ==="q21" || inputName ==="q22"){
                                        flag = true;
                                        if(!this.state.disabledSmokeCO){
                                                if(inputValue.length < 1 || inputValue === '' ){
                                                        this.setState({AllowContinue: false});
                                                        this.setState({emptyFlag: true});
                                                        emptyRespArr.push(inputName);
                                                }
                                        }
     
                                }

                                if(inputName === "q31PhoneNumExtension"){
                                        flag = true;                                        
                                }

                                if(inputName ==="q26" || inputName.includes("q27") || inputName.includes("q29") || inputName ==="q31Name" ||  inputName ==="q31PhoneNum"){
                                        flag = true;
                                        if(!this.state.disabled){
                                                if(inputValue.length < 1 ||inputValue === '' ){
                                                        this.setState({AllowContinue: false});
                                                        this.setState({emptyFlag: true});
                                                        emptyRespArr.push(inputName);
                                                }
                                        }
     
                                }

                                if(!flag){
                                        if(inputValue.length < 1 || inputValue === '' ){
                                                this.setState({AllowContinue: false});
                                                this.setState({emptyFlag: true});
                                                emptyRespArr.push(inputName);
                                        }

                                }
                        
                                
                        }
        
        
                })


                noCommArr.map((entry)=>{
                        this.valdateQues(entry.slice(1))

                })

                emptyRespArr.map((entry)=>{
                        // this.valdateEmptyInput(entry.match(/(\d+)/)[0])
                        this.valdateEmptyInput(entry.slice(1))

                })
                


        }

        valdateQues = (quesNum) => {

                toast.error(`Please provide a comment for Question ${quesNum}`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: false
                });
        }

        valdateEmptyInput = (quesNum) => {

                toast.error(`Please provide an input for Question ${quesNum} before proceeding`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: false
                });
        }


        continue = async (eve) => {
                const result = await this.authenticateResponses();
                if(this.state.AllowContinue){
                        // console.log('once')
                        eve.preventDefault();
                        this.props.nextPage();
                        this.props.submitHandler();

                }
                
        }
       
        HomeNotify =(e)=> {
                this.props.HomeSafetyChange(e);
                this.notify(e)
        }
        injuryNotify =(e)=> {
               this.props.InjurySafetyChange(e);
                this.notify(e)
        }
        lifeNotify =(e)=> {
                this.props.LifeSafetyChange(e);
                 this.notify(e)
         }

        lifeYesNotify =(e)=> {
                 this.props.LifeSafetyChange(e);
                 this.notifyYes(e)
         }

        alternateSmokeDetectors =(e)=>{
                 
                if (e.target.value==="Yes"){
                        this.lifeYesNotify(e);
                        this.setState({
                                disabledSmoke:false
                                
                        });

                }
                if (e.target.value==="No"){
                     
                        this.setState({
                                
                                disabledSmoke:true
                        });
                }
                

        }

        alternateCODetectors =(e)=>{
                 
                if (e.target.value==="Yes"){
                        this.lifeYesNotify(e);
                        this.setState({
                                disabledCO:false
                                
                        });

                }
                if (e.target.value==="No"){
                       
                        this.setState({
                                
                                disabledCO:true
                        });
                }
                

        }

        alternateSmokeCODetectors =(e)=>{
                 
                if (e.target.value==="Yes"){
                        this.lifeYesNotify(e);
                        this.setState({
                                disabledSmokeCO:false
                                
                        });

                }
                if (e.target.value==="No"){
                      
                        this.setState({
                                
                                disabledSmokeCO:true
                        });
                }
                

        }

         notifyYes = (e) => {

                toast.warn(`You selected ${e.target.value},
                please provide number of detectors and their expiry date`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000
                });
        }



         healthNotify =(e)=> {
                this.props.HealthSafetyChange(e);
                
                 this.alternateChange(e);
         }


        alternateChange=(e) =>{

                if (e.target.value==="No"){
                        // this.props.handleReset('q27');
                        this.setState({
                                disabled:false
                        });
                }

                if (e.target.value==="Yes"){
                        // this.props.handleReset('q27');
                        this.setState({
                                disabled:true,
                                
                        });

                }

                if(e.target.value==="Other"){
                        this.setState({
                                disabledq27:! this.state.disabledq27
                        });
                }

                if(e.target.value==="Other1"){
                        this.setState({
                                disabledq28:! this.state.disabledq28
                        });
                }


               
        }

        
 

        handleChange2=(e) =>{
               
        }


        previous = (eve) => {
                eve.preventDefault();
                this.props.prevPage();
        }

        notify = (e) => {

                toast.warn(`You selected ${e.target.value},
                please provide comments`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000
                });
        }



        render(){
                const {interiorValues, handleChange, HomeSafetyChange, LifeSafetyChange,HealthSafetyChange,InjurySafetyChange} = this.props;

               

                return(
                        <div class="form-header">
                                <div class="grid-container">
                                        <div className="questions grid-child">
                                                <h3 >SMOKE / CO DETECTORS</h3>
                                                <div className="ques">11. Are Smoke Detectors installed in the home?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q11')}>  
                                                        <input type="radio" value="Yes" name="q11" defaultChecked={interiorValues.q11 === "Yes"} onClick={this.alternateSmokeDetectors}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q11" defaultChecked={interiorValues.q11 === "No"} onClick={this.alternateSmokeDetectors}/> No &emsp;
                                                </div>
                                                <br/>
                                                <div className="ques">12. How many smoke detectors on site?<p/>
                                                <input type="number" min="0" disabled={this.state.disabledSmoke} placeholder= " Number of Smoke Detectors" step="1" defaultValue={interiorValues.q12} onChange={handleChange('q12')}/>
                                                </div><p/>
                                                <div className="ques">13. What is the expiry date for Smoke detector?<p/>
                                                <input disabled={this.state.disabledSmoke} type="Date" defaultValue={interiorValues.q13}  onChange={handleChange('q13')} className="inputV4"/>
                                                </div><p/>
                                                <div className="ques">14. Do they work when tested? </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q14')}>
                                                        <input type="radio" disabled={this.state.disabledSmoke} value="Yes" name="q14"checked={interiorValues.q14 === "Yes"}   onClick={LifeSafetyChange}/>Yes &emsp;
                                                        <input type="radio" disabled={this.state.disabledSmoke} value="No" name="q14" checked={interiorValues.q14 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>      
                                                        <textarea  className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q14Comments} onChange={handleChange('q14Comments')}></textarea>
                                                </div><p/>

                                        </div>
                                        <div className="infotop grid-child">
                                                <p>
                                                        <b>Consideration:</b> Smoke detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed,
                                                        change batteries and check expiration dates. Recommend a minimum of 1 smoke detector on each floor.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3 >CARBON MONOXIDE(CO) DETECTORS </h3>
                                                <div className="ques">15. Are CO detectors installed in the home?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q15')}>  
                                                        <input type="radio" value="Yes" name="q15" checked={interiorValues.q15 === "Yes"}  onClick={this.alternateCODetectors}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q15" checked={interiorValues.q15=== "No"} onClick={this.alternateCODetectors}/> No &emsp;
                                                </div><p/>
                                                <div className="ques">16. How many CO detectors are on site?<p/>
                                                <input type="number" disabled={this.state.disabledCO} min="0" placeholder= " Number of Co Detectors" step="1" defaultValue={interiorValues.q16} onChange={handleChange('q16')}/>
                                                </div><p/>
                                                <div className="ques">17. What is the expiry date for the CO detector?<p/>
                                                <input type="Date" disabled={this.state.disabledCO} defaultValue={interiorValues.q17}  onChange={handleChange('q17')} className="inputV4"/>
                                                </div><p/>
                                                &emsp;&emsp;
                                                <div className="ques">18. Do they work when tested? </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q18')}>
                                                        <input type="radio" disabled={this.state.disabledCO} value="Yes" name="q18"checked={interiorValues.q18 === "Yes"}  onClick={LifeSafetyChange}/>Yes &emsp;
                                                        <input type="radio" disabled={this.state.disabledCO} value="No" name="q18" checked={interiorValues.q18 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q18Comments} onChange={handleChange('q18Comments')}></textarea>
                                                </div><p/>
                                        </div>

                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Carbon monoxide detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed,
                                                        change batteries and check expiration dates. Recommend a minimum of 1 Carbon monoxide detector on each floor.
                                                </p>

                                        </div>                                        

                                        <div className="questions grid-child">
                                                <h3 >SMOKE / CARBON MONOXIDE(CO) DETECTORS</h3>
                                                <div className="ques">19. Are Smoke/CO detectors installed in the home?
                                                 </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q19')}>  
                                                        <input type="radio" value="Yes" name="q19" checked={interiorValues.q19 === "Yes"}  onClick={this.alternateSmokeCODetectors}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q19" checked={interiorValues.q19 === "No"} onClick={this.alternateSmokeCODetectors}/> No &emsp;
                                                </div>
                                                <br/>
                     
                                                <p/>
                                                <div className="ques">20. How many Smoke/CO detectors are on site?<p/>
                                                <input type="number" min="0" disabled={this.state.disabledSmokeCO} placeholder= " Number of Smoke/Co Detectors" step="1" defaultValue={interiorValues.q20} onChange={handleChange('q20')}/>
                                                </div><p/>
                                                <div className="ques">21. What is the expiry date for the Smoke/CO detector?<p/>
                                                <input type="Date" disabled={this.state.disabledSmokeCO} defaultValue={interiorValues.q21}  onChange={handleChange('q21')}className="inputV4"/>
                                                </div><p/>
                                                &emsp;&emsp;
                                                <div className="ques">22. Do they work when tested?  </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q22')}>
                                                        <input type="radio" disabled={this.state.disabledSmokeCO} value="Yes" name="q22"checked={interiorValues.q22 === "Yes"}  onClick={LifeSafetyChange}/>Yes &emsp;
                                                        <input type="radio" disabled={this.state.disabledSmokeCO} value="No" name="q22" checked={interiorValues.q22 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>        
                                                        <textarea  className="CommentSetting"  placeholder=" Enter Comments.." defaultValue={interiorValues.q22Comments} onChange={handleChange('q22Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Smoke/CO detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed,
                                                        change batteries and check expiration dates. Recommend a minimum of 1 smoke/CO detector on each floor.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>FIRE EXTINGUISHERS</h3>
                                                <div className="ques">23. Is there a minimum of one fire
                                                extinguisher on each floor? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q23')}>  
                                                        <input type="radio" value="Yes" name="q23" defaultChecked={interiorValues.q23 === "Yes"}  onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q23" defaultChecked={interiorValues.q23 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                </div>
                                               
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q23Comments} onChange={handleChange('q23Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In case a small fire takes place,
                                                        any person in the home could use the fire extinguisher to put the fire out and prevent a more serious large fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend purchasing at least 1 (Class A,B,C) fire extinguisher per floor.
                                                        Recommend 1 fire extinguisher to be installed in the kitchen.
                                                        Fire extinguishers should be placed within 30 feet of furnaces and/or wood stoves.<br/>
                                                        If <u>Yes</u> - Check expiration date, class and pressure gauge (needle is in the Green) to ensure they will work if needed.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>DOORS AND WINDOWS</h3>
                                                <div className="ques">24. Are all doors clear
                                                of obstructions and do they open? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q24')}>   
                                                        <input type="radio" value="Yes" name="q24" defaultChecked={interiorValues.q24 === "Yes"} onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q24" defaultChecked={interiorValues.q24 === "No"} onClick={this.lifeNotify}  onClick={LifeSafetyChange}/> No &emsp;
                                                </div><p/>
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q24Comments} onChange={handleChange('q24Comments')}></textarea>
                                                </div><p/>

                                                <div className="ques">25. Are all windows clear
                                                of obstructions and do they open? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q25')}>   
                                                        <input type="radio" value="Yes" name="q25" defaultChecked={interiorValues.q25 === "Yes"}  onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q25" defaultChecked={interiorValues.q25 === "No"} onClick={this.lifeNotify}  /> No &emsp;
                                                        <input type="radio" value="N/A" name="q25" defaultChecked={interiorValues.q25 === "N/A"} onClick={this.lifeNotify}/> N/A
                                                </div><br/>
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q25Comments} onChange={handleChange('q25Comments')}></textarea>
                                                </div><p/>
                                                </div>

                                                <div className="info grid-child">
                                                <p>
                                                       
                                                        <b>Consideration:</b>  Doors/windows must be clear of obstructions to facilitate
                                                        rapid evacuation from a home.<br/><br/>
                                                        <b>Recommendation:</b> keep the doors/windows free of objects in case
                                                        there is a need to exit in an emergency situation.<br/><br/>

                                                     
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>ENVIRONMENTAL</h3>
                                                <p/>    
                                                <div className="ques">26. Is the home free of any environmental issues?</div><p/>
                                                <div className="radioOptions" onChange={handleChange('q26')}>  
                                                        <input type="radio" value="Yes" name="q26" defaultChecked={interiorValues.q26 === "Yes"} onClick={this.healthNotify} /> Yes &emsp;
                                                        <input type="radio" value="No" name="q26" defaultChecked={interiorValues.q26 === "No"} onClick={this.healthNotify} /> No &emsp;
                                                </div><p/>

                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q26Comments} onChange={handleChange('q26Comments')}></textarea>
                                                </div><p/>

                                                <div className="ques">27. If No, What environmental issue does the home have?
                                                </div><p/>
                                               
                                                <div className="multiChoice" >
                                                        <input type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q27a === "Mould"} onChange={handleChange('q27a')} value="Mould" />Mould<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q27b === "Musty-Scent"} onChange={handleChange('q27b')} value="Musty-Scent"/>Musty-Scent<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q27c === "WaterLeak"} onChange={handleChange('q27c')} value="WaterLeak"/>WaterLeak<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} value="Other" defaultChecked={interiorValues.q27d === "Other"} onChange={handleChange('q27d')} onClick={this.alternateChange}/>Other<br/>
                                                </div><p/>

                                                <div className="ques">28. If others enter location in the comment box:</div><p/>
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." disabled={this.state.disabledq27} defaultValue={interiorValues.q28Comments} onChange={handleChange('q28Comments')}></textarea>
                                                </div><p/>
   
                                                <p/>
                                                <div className="ques">29. Where can the environmental issue be found?</div><p/>
                                                <div className="multiChoice" >        
                                                        <label><input type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q29a === "Kitchen"} onChange={handleChange('q29a')} value="Laundry"/>Laundry</label><br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q29b === "Kitchen"} onChange={handleChange('q29b')} value="Kitchen"/> Kitchen<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q29c === "Door"} onChange={handleChange('q29c')} value="Door"/>Door<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q29d === "Window"} onChange={handleChange('q29d')} value="Window"/> Window<br/>
                                                        <input  type="checkbox" disabled={this.state.disabled} defaultChecked={interiorValues.q29e === "Other1"} onChange={handleChange('q29e')} value="Other1"  onClick={this.alternateChange}/>Other<br/>                                            
                                                </div><p/>
                                                <div className="ques">30. If others enter location in the comment box:</div><p/>
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." disabled={this.state.disabledq28} defaultValue={interiorValues.q30Comments} onChange={handleChange('q30Comments')}></textarea>
                                                </div><p/>
                                               
                                                <div className="ques">
                                                31. If No, Environmental Health Officer (EHO) / Remediation Contact advised?</div><br/>
                                                &emsp; Full Name:&emsp;&emsp;&emsp;<input type="text"  placeholder="First Name, Last Name" defaultValue={interiorValues.q31Name} onChange={handleChange('q31Name')}/>&emsp;<br/><br/>
                                                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone Number:&emsp;<input type="tel"  placeholder="Enter Number" defaultValue={interiorValues.q31PhoneNum} onChange={handleChange('q31PhoneNum')}/><br/><br/> */}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone Number:&emsp;<NumberFormat className="inputV4" format="+1 (###) ###-####" allowEmptyFormatting mask="_" defaultValue={interiorValues.q31PhoneNum} onChange={handleChange('q31PhoneNum')}/>
                                                &nbsp;&nbsp;Extension:&nbsp;<NumberFormat className="inputV5" maxLength="8" placeholder=" Optional" defaultValue={interiorValues.q31PhoneNumExtension} onChange={handleChange('q31PhoneNumExtension')}/>

                                                <p/>
                                               
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> The presence of environmental issues such as mould indicates an underlying issue.
                                                        Mould and damp conditions can cause a variety of health issues.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the cause of the environmental issues such as mould/dampness be identified and fixed.
                                                        A qualified person should perform a mould test and recommend mitigation.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <h3>STAIRCASE AND HANDRAILS</h3>
                                                <div className="ques">32. Is the staircase clear of
                                                obstructions and are the stairs and handrails secure?</div>&emsp;
                                               
                                                <div className="radioOptions" onChange={handleChange('q32')}>      
                                                        <input type="radio" value="Yes" name="q32" defaultChecked={interiorValues.q32 === "Yes"} onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q32" defaultChecked={interiorValues.q32 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q32" defaultChecked={interiorValues.q32 === "N/A"} onClick={this.lifeNotify}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q32Comments} onChange={handleChange('q32Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> : Obstructions on the stairs can be a trip hazard, and can make it hard for people to escape the building safely
                                                        and/or for responders to get in to provide help. Unsecured steps and/ or handrails could cause someone to fall or become injured.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions so that stairs are clear in case of an emergency.
                                                        Repair steps and handrails as required.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>PLUMBING:</h3>
                                                <div className="ques">33. Are the bathroom, kitchen and/or 
                                                laundry room sinks free of leaks? </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q33')}>      
                                                        <input type="radio" value="Yes" name="q33" defaultChecked={interiorValues.q33 === "Yes"} onClick={HealthSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q33" defaultChecked={interiorValues.q33 === "No"} onClick={this.healthNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q33Comments} onChange={handleChange('q33Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Mould and damp conditions can cause a variety of health issues.
                                                        Leaking water will cause decay to the building.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend leaks are repaired.
                                                        If there is mould, have a test performed by a qualified person.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>ELECTRICAL</h3>
                                                <div className="ques">34. Is the electrical panel easy 
                                                to access and free from clutter?</div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q34')}>      
                                                        <input type="radio" value="Yes" name="q34" defaultChecked={interiorValues.q34 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q34" defaultChecked={interiorValues.q34 === "No"} onClick={this.HomeNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q34Comments} onChange={handleChange('q34Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In the case of an emergency, rescue personnel may need to turn off the electricity at the panel.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend moving obstructions a minimum of 4 feet in front of the panel and 2 feet from the sides.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">35. Are outlets installed within 6 feet
                                                of sinks, baths or any other water source GFCI outlets? </div>&emsp;
                                               
                                                <div className="radioOptions" onChange={handleChange('q35')}>      
                                                        <input type="radio" value="Yes" name="q35" defaultChecked={interiorValues.q35 === "Yes"} onClick={InjurySafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q35" defaultChecked={interiorValues.q35 === "No"} onClick={this.injuryNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q35Comments} onChange={handleChange('q35Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> There is a high chance that someone using an item that is plugged in near water could suffer an electric shock if
                                                        the item comes into contact with water and the outlet is not a GFCI outlet.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend replacing any outlets within 6 feet of a water source with GFCI outlets.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">36. Are electrical outlets in all rooms in the house functioning
                                                and there have been no problems with any of the outlets?
                                                </div>&emsp;
                                               
                                                <div className="radioOptions" onChange={handleChange('q36')}>      
                                                        <input type="radio" value="Yes" name="q36" defaultChecked={interiorValues.q36 === "Yes"}  onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q36" defaultChecked={interiorValues.q36 === "No"} onClick={this.HomeNotify} /> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q36Comments} onChange={handleChange('q36Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Proper electrical current will keep the home wiring from overheating when used.
                                                        If improper electrical current travels through the wiring, over time it could overheat and start a fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend there may be a polarity issue. Have the electrical current flow tested.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">37. Do all light switches and outlets have covers and are they
                                                free from discolouration?
                                                </div>&emsp;
                                               
                                                <div className="radioOptions" onChange={handleChange('q37')}>      
                                                        <input type="radio" value="Yes" name="q37" defaultChecked={interiorValues.q37 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q37" defaultChecked={interiorValues.q37 === "No"} onClick={this.HomeNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q37Comments} onChange={handleChange('q37Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b>: Light switch and outlet covers are there to prevent any possible shock hazards.
                                                        If the covers are discoloured, this is a sign that there may be a problem with the electrical current flow<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend any damaged covers be replaced.

                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>HEATING SYSTEMS</h3>
                                                <div className="ques">38. Is the furnace clear of obstructions
                                                and combustible materials?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q38')}>      
                                                        <input type="radio" value="Yes" name="q38" defaultChecked={interiorValues.q38 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q38" defaultChecked={interiorValues.q38 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q38" defaultChecked={interiorValues.q38 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q38Comments} onChange={handleChange('q38Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Furnaces require at least 2 feet of clearance around them to remain cool and not overheat.
                                                        If the furnace was to overheat, it would not work properly, may breakdown or may even catch fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions and combustible materials a minimum of 2 feet away from the furnace.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">39. Does the furnace appear to be in good condition?
                                                Is it clean and free from dust and discoloration on the main body and
                                                venting?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q39')}>      
                                                        <input type="radio" value="Yes" name="q39" defaultChecked={interiorValues.q39 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q39" defaultChecked={interiorValues.q39 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q38" defaultChecked={interiorValues.q39 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q39Comments} onChange={handleChange('q39Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> A furnace is used to heat a home. It also exchanges the air in the home, meaning it freshens the air occupants breathe.
                                                        It is important to keep the filter and the area around the furnace clean for fresh air<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a qualified technician service, and if necessary, repair the furnace.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>HEATING SYSTEMS</h3>
                                                <div className="ques">40. Is there a shutoff valve on or near
                                                the furnace and does the furnace turn on right away when the thermostat
                                                is turned up? </div>&emsp;
                                               
                                                <div className="radioOptions" onChange={handleChange('q40')}>    
                                                        <input type="radio" value="Yes" name="q40" defaultChecked={interiorValues.q40 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q40" defaultChecked={interiorValues.q40 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q40" defaultChecked={interiorValues.q40 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q40Comments} onChange={handleChange('q40Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In the case of an emergency, the responders may need to turn off the gas valve to the furnace.
                                                        Someone doing maintenance may also need to turn off the gas valve.
                                                        If the furnace does not react promptly to the thermostat being turned up, this may indicate problems with the furnace.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a qualified gas technician repair and service the furnace.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <h3>BASEBOARDS AND SPACE HEATERS</h3>
                                                <div className="ques">41. Are the baseboards and space heaters clear of
                                                obstructions?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q41')}>      
                                                        <input type="radio" value="Yes" name="q41" defaultChecked={interiorValues.q41 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q41" defaultChecked={interiorValues.q41 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q41" defaultChecked={interiorValues.q41 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q41Comments} onChange={handleChange('q41Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> : Baseboards and space heaters operate at high temperatures.
                                                        It is important to keep articles 2 feet away from baseboards and space heaters when they are on to avoid the possibility of a fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend obstructions be moved at least 2 feet away.
                                                </p>

                                        </div>
                                       
                                        <div className="questions grid-child">
                                                <div className="ques">42. Are the baseboards and space heaters functioning
                                                properly? When you turn up the thermostat, do they heat up?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q42')}> 
                                                        <input type="radio" value="Yes" name="q42" defaultChecked={interiorValues.q42 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q42" defaultChecked={interiorValues.q42 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q42" defaultChecked={interiorValues.q42 === "N/A"} onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q42Comments} onChange={handleChange('q42Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Baseboards and space heaters operate at high temperatures.
                                                        It is important to make sure they work properly to avoid the possibility of a fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the baseboards and/or space heaters be repaired or replaced as necessary.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">43. Do the baseboards appear to be in good condition? Are
                                                they free from dust and discoloration?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q43')}>    
                                                        <input type="radio" value="Yes" name="q43" defaultChecked={interiorValues.q43 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q43" defaultChecked={interiorValues.q43 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q43" defaultChecked={interiorValues.q43 === "N/A"} onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q43Comments} onChange={handleChange('q43Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> If the baseboards are discoloured with blackish, brown stains they may be over heating which could eventually cause a fire<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the baseboards be repaired or replaced as necessary.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <h3>WOOD STOVE</h3>
                                                <div className="ques">44. Is the exterior chimney free of any cracks, missing bricks
                                                or chimney cap, or black creosote buildup?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q44')}>   
                                                        <input type="radio" value="Yes" name="q44" defaultChecked={interiorValues.q44 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q44" defaultChecked={interiorValues.q44 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q44" defaultChecked={interiorValues.q44 === "N/A"} onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q44Comments} onChange={handleChange('q44Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> A chimney with obvious cracks, missing bricks, missing chimney cap,
                                                        or creosote buildup most likely has structural damage or is not working properly and the chance of having a chimney fire is much higher<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the chimney be repaired and serviced by a certified WETT technician.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <div className="ques">45. Does the wood stove and interior chimney appear to be in
                                                good condition? Is the glass door free from cracks and black discolouration?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q45')}>
                                                        <input type="radio" value="Yes" name="q45" defaultChecked={interiorValues.q45 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q45" defaultChecked={interiorValues.q45 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q45" defaultChecked={interiorValues.q45 === "N/A"} onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q45Comments} onChange={handleChange('q45Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> If a wood stove or chimney has signs of leaking joints or any cracks or discolouration,
                                                        it is not functioning properly and is becoming a fire hazard.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a certified WETT technician repair and service as required.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">46. Is there a working Smoke/CO detector centrally located on
                                                the ceiling but not closer than 20 feet of the wood stove or
                                                fireplace?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q46')}>
                                                        <input type="radio" value="Yes" name="q46" defaultChecked={interiorValues.q46 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q46" defaultChecked={interiorValues.q46 === "No"}onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q46" defaultChecked={interiorValues.q46 === "N/A"}onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q46Comments} onChange={handleChange('q46Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> It is important not to put the detector too close to the fireplace or woodstove because quite often smoke is released in the home while the
                                                        wood stove or fireplace is being lit or refuelled.
                                                        If the detector is too close, it will set off a false alarm .<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a smoke/CO detector be installed (or moved) a minimum of 20 feet from the wood stove or fireplace.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <div className="ques">47. Is there a fire extinguisher within 20 feet of the wood stove
                                                or fireplace but not closer than 10 feet?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q47')}>
                                                        <input type="radio" value="Yes" name="q47" defaultChecked={interiorValues.q47 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q47" defaultChecked={interiorValues.q47 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q47" defaultChecked={interiorValues.q47 === "N/A"} onClick={this.HomeNotify}/> N/A 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q47Comments} onChange={handleChange('q47Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Fire extinguishers should be kept a minimum of 10 feet away from a woodstove or fireplace.
                                                        In case there is a fire, you can locate the extinguisher and use it as you approach the wood stove or fireplace.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a fire extinguisher be placed no closer than 10 feet.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <h3>HOME SAFETY PLAN</h3>
                                                <div className="ques">48. Does the household have a safety plan and a meeting
                                                location in place?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q48')}>
                                                        <input type="radio" value="Yes" name="q48" defaultChecked={interiorValues.q48 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q48" defaultChecked={interiorValues.q48 === "No"} onClick={this.HomeNotify}/> No 
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q48Comments} onChange={handleChange('q48Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> A safety plan will let everyone in the home know how to escape and get to a safe meeting location.
                                                        This will also be very helpful when responders arrive if anyone is missing.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend occupants to create, modify and review a plan that consists of: <br/>
                                                        • all escape routes using doors and windows.<br/>
                                                        • a determined meeting place.<br/>
                                                        • do these escape routes work, during all seasons?<br/>
                                                        • are the occupants aware that they should not re-enter the home under any circumstance?<br/>
                                                        • review the safety plan and practice it annually.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">49. Is there a list of emergency numbers and contacts?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q49')}>
                                                        <input type="radio" value="Yes" name="q49" defaultChecked={interiorValues.q49 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q49" defaultChecked={interiorValues.q49 === "No"} onClick={this.HomeNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q49Comments} onChange={handleChange('q49Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In the case of an emergency, there should be a list of emergency numbers close to the phone for anyone who is there to use.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend occupants to review or create a new list of numbers that include emergency services and at least 2 people that live close by.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">50. Is there a phone that works without power?</div>&emsp;
                                       
                                                <div className="radioOptions" onChange={handleChange('q50')}>
                                                        <input type="radio" value="Yes" name="q50" defaultChecked={interiorValues.q50 === "Yes"} onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q50" defaultChecked={interiorValues.q50 === "No"} onClick={this.lifeNotify}/> No
                                                </div>
                                                <p/>      
                                                <div>      
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={interiorValues.q50Comments} onChange={handleChange('q50Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infobottom grid-child">
                                                <p>
                                                        <b>Consideration:</b> If there is a power outage, any house phones that operate on electricity will not work.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend that the house have a phone that works without power.
                                                </p>

                                        </div>
                                </div>
                                <br/>
                                <button class="ui left labeled icon button previous blue" onClick={this.previous}>
                                        <i class="left arrow icon"></i>
                                        Previous
                                </button>
                                        {/* <button onClick={this.continue}>Continue</button> */}
                                <button class="ui right labeled icon button next blue" onClick={this.continue} >
                                        <i class="right arrow icon"></i>
                                        Submit
                                </button>
                        </div>
                );
        }
}

export default InteriorDetails;