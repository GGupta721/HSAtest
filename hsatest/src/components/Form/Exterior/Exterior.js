import React from  "react"
import { toast } from 'react-toastify';
import "./Exterior.css"

toast.configure();
class Exterior extends React.Component{
        state = {
                AllowContinue : true
        }

        authenticateResponses = () => {
                const noRespArr = [];
                const noCommArr = [];
                this.setState({AllowContinue: true});
               
                Object.entries(this.props.exteriorValues).map((ques) =>{
                        if(ques[0].includes("q") && !ques[0].includes("Comments") ){
                                if (ques[1] === 'No' ||  ques[1] === 'N/A'){
                                        noRespArr.push(ques[0]);
                                }  
                        }

                        })
                console.log(noRespArr);
                Object.entries(this.props.exteriorValues).map((ques) =>{
                        noRespArr.map((entry)=>{
                                // console.log(entry)
                                if (ques[0].includes(entry) && ques[0].includes("Comments")){
                                        if(ques[1].length < 1 || ques[1] === ''){
                                                // console.log("bad!", ques)
                                                noCommArr.push(entry);
                                                this.setState({AllowContinue: false});
                                        }
                                }
                        })
                })
                noCommArr.map((entry)=>{
                        this.valdateQues(entry.slice(1))

                })
                // return true;


        }

        continue = async (eve) => {
                const result = await this.authenticateResponses();
                if(this.state.AllowContinue){
                        // console.log('once')
                        eve.preventDefault();
                        this.props.nextPage();
                }
        }
   
        previous = (eve) => {
                eve.preventDefault();
                this.props.prevPage();
        }

 
        buildingNotify =(e)=> {
                this.props.BuildingSafetyChange(e);
                this.notify(e)
        }
        injuryNotify =(e)=> {
               this.props.InjurySafetyChange(e);
                this.notify(e)
        }
        notify = (e) => {

                toast.warn(`You selected ${e.target.value},
                please provide comments`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: false
                });
        }

        valdateQues = (quesNum) => {

                toast.error(`Please provide a comment for Question ${quesNum}`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: false
                });
        }

        update = () => toast.update({ type: toast.TYPE.INFO, autoClose: 5000 });

        render(){
                const {exteriorValues, handleChange,BuildingSafetyChange,InjurySafetyChange} = this.props;
               
                return(
                        <div>
                                <div className="grid-container">
                                        <div className="questions grid-child">
                                                
                                                <h3>House Details</h3>
                                                
                                                <div className="ques">1. Is the house address visible ?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q1')}>   
                                                        <input type="radio" value="Yes" name="q1" defaultChecked={exteriorValues.q1 === "Yes"} onClick={BuildingSafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q1" defaultChecked={exteriorValues.q1 === "No"} onClick={this.buildingNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q1" defaultChecked={exteriorValues.q1 === "N/A"} onClick={this.buildingNotify}/> N/A
                                                </div>
                                                
                                                <p/>
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q1Comments} onChange={handleChange('q1Comments')} ></textarea>
                                                </div><p/>
                                                
                                                
                                        </div>

                                        <div className="infotop grid-child"  >
                                                
                                                <p><b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.</p>
                                                <p><b>Recommendation:</b> If <u>No</u> - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.</p>
                                                

                                        </div>
                                

                                        <div className="questions grid-child">
                                                
                                                <h3 >Exterior Fuel Tank or Gas Meter</h3>
                                                
                                                <div className="ques">2. Do they have visible shutoff valves ?</div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q2')}>   
                                                        <input type="radio" value="Yes" name="q2" defaultChecked={exteriorValues.q2 === "Yes"} onClick={BuildingSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q2" defaultChecked={exteriorValues.q2 === "No" } onClick={this.buildingNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q2" defaultChecked={exteriorValues.q2 === "N/A"} onClick={this.buildingNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q2Comments} onChange={handleChange('q2Comments')}></textarea>
                                                </div><p/>

                                        </div>

                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> During an emergency, the gas or propane may
                                                        need to be shut off for the safety of responders.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the shutoff valves be
                                                        located and tested in the on and off position
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3 >Electrical Service Entry </h3>
                                                <div className="ques">3. Are the electrical wires securely
                                                attached to the building, and free from tree limbs?</div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q3')}>   
                                                        <input type="radio" value="Yes" name="q3" defaultChecked={exteriorValues.q3 === "Yes"} onClick={BuildingSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q3" defaultChecked={exteriorValues.q3 === "No"} onClick={this.buildingNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q3" defaultChecked={exteriorValues.q3 === "N/A"} onClick={this.buildingNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q3Comments} onChange={handleChange('q3Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> If the electrical wires are not securely attached to the building or are knocked off the building, 
                                                        there is a possibility of electrical shock.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend contacting the utility provider. Tree limbs should be removed.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3 >Steps And Handrails</h3>
                                                <div className="ques">4. Are the steps and handrails 
                                                free of rot and cracks? Are the stairs and handrails secure?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q4')}>   
                                                        <input type="radio" value="Yes" name="q4" defaultChecked={exteriorValues.q4 === "Yes"} onClick={InjurySafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q4" defaultChecked={exteriorValues.q4 === "No"} onClick={this.buildingNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q4" defaultChecked={exteriorValues.q4 === "N/A"} onClick={this.injuryNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q4Comments} onChange={handleChange('q4Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Steps and handrails that are in poor shape may break when someone is using them. 
                                                        This could cause someone to fall or become injured.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend steps and/or handrails be repaired and secured.
                                                </p>

                                        </div> 
                                        
                                        <div className="questions grid-child">
                                                <div className="ques">5. Is the walkway and stairs free
                                                from trip hazards?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q5')}>   
                                                        <input type="radio" value="Yes" name="q5" defaultChecked={exteriorValues.q5 === "Yes"} onClick={InjurySafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q5" defaultChecked={exteriorValues.q5 === "No"} onClick={this.buildingNotify}/> No &emsp;
                                                </div> 
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder="Enter Comments.." defaultValue={exteriorValues.q5Comments} onChange={handleChange('q5Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Trip hazards could cause injuries to people coming or going from the home. 
                                                        Trip hazards may become less obvious in the dark, rain or snow<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend repair and/or removal of any trip hazards.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3 >Exterior Outlets</h3>
                                                <div className="ques">6. Do the exterior outlets have working covers?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q6')}>   
                                                        <input type="radio" value="Yes" name="q6" defaultChecked={exteriorValues.q6 === "Yes"} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q6" defaultChecked={exteriorValues.q6 === "No"} onClick={this.notify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q6" defaultChecked={exteriorValues.q6 === "N/A"} onClick={this.notify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q6Comments} onChange={handleChange('q6Comments')}></textarea>
                                                </div><p/>

                                                <div className="ques">7. Are the exterior outlets GFCI outlets?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q7')}>   
                                                        <input type="radio" value="Yes" name="q7" defaultChecked={exteriorValues.q7 === "Yes"} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q7" defaultChecked={exteriorValues.q7 === "No"} onClick={this.notify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q7" defaultChecked={exteriorValues.q7 === "N/A"} onClick={this.notify}/> N/A
                                                </div>

                                                
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q7Comments} onChange={handleChange('q7Comments')}></textarea>
                                                </div><p/>
                                                {/* <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> There is a high chance that someone using an item that is plugged in near water could suffer an electric shock if
                                                        the item comes into contact with water and the outlet is not a GFCI outlet.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend replacing any outlets within 6 feet of a water source with GFCI outlets.
                                                </p>

                                                </div> */}
                                                <div className="ques">8. Is there proper current flow to the outlets?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q8')}>   
                                                        <input type="radio" value="Yes" name="q8" defaultChecked={exteriorValues.q8 === "Yes"} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q8" defaultChecked={exteriorValues.q8 === "No"} onClick={this.notify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q8" defaultChecked={exteriorValues.q8 === "N/A"} onClick={this.notify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q8Comments} onChange={handleChange('q8Comments')}></textarea>
                                                </div><p/>
                                                <div className="ques">9. Does the outlet breaker work? </div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q9')}>   
                                                        <input type="radio" value="Yes" name="q9" defaultChecked={exteriorValues.q9 === "Yes"} /> Yes &emsp;
                                                        <input type="radio" value="No" name="q9" defaultChecked={exteriorValues.q9 === "No"} onClick={this.notify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q9" defaultChecked={exteriorValues.q9 === "N/A"} onClick={this.notify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q9Comments} onChange={handleChange('q9Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> If proper outlets and covers are not in place, there is a risk of electric shock.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend repair or replace as necessary.
                                                </p>
                                        </div>


                                        <div className="questions grid-child">
                                                <h3 >Exterior Door</h3>
                                                <div className="ques">10. Are all exterior doors clear of obstructions
                                                and in good working order so they can be used in case of an emergency? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q10')}>   
                                                        <input type="radio" value="Yes" name="q10" defaultChecked={exteriorValues.q10 === "Yes"} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q10" defaultChecked={exteriorValues.q10 === "No"} onClick={this.notify}/> No &emsp;
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q10Comments} onChange={handleChange('q10Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infobottom grid-child">
                                                <p>
                                                        <b>Consideration:</b> In an emergency, if any of the exits are blocked, 
                                                        there is a chance people will not be able to escape.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend obstructions be removed and doors fixed if required so they work properly.
                                                </p>

                                        </div>  
                                       
                                </div>
                                <button className="ui left labeled icon button previous blue" onClick={this.previous}>
                                        <i className="left arrow icon"></i>
                                        Previous
                                </button>
                                        {/* <button onClick={this.continue}>Continue</button> */}
                                <button className="ui right labeled icon button next blue" onClick={this.continue}>
                                        <i className="right arrow icon"></i>
                                        Continue
                                </button>
                        </div>
                                                  
                );
        }
}
export default Exterior;