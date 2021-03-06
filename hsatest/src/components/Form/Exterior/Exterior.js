import React from  "react"
import { toast } from 'react-toastify';
import "./Exterior.css"

toast.configure();
class Exterior extends React.Component{
        state = {
                AllowContinue : true,
                emptyFlag: false
        }

        authenticateResponses = () => {
                const noRespArr = [];
                const noCommArr = [];
                const emptyRespArr = [];
                this.setState({AllowContinue: true});
                this.setState({emptyFlag: false});
               
                Object.entries(this.props.exteriorValues).map((ques) =>{
                        if(ques[0].includes("q") && !ques[0].includes("Comments") ){
                                if (ques[1] === 'No' ||  ques[1] === 'N/A'){
                                        noRespArr.push(ques[0]);
                                }  
                        }

                        })
                // console.log(noRespArr);
                // const temStr = 'sgr2332redb';
                // console.log(temStr.match(/(\d+)/)[0]);

                Object.entries(this.props.exteriorValues).map((ques) =>{
                        noRespArr.map((entry)=>{
                                // console.log(entry.match(/(\d+)/))
                                if (ques[0].includes(entry) && ques[0].includes("Comments") && ques[0].match(/(\d+)/)[0] === entry.match(/(\d+)/)[0] ){
                                        if(ques[1].length < 1 || ques[1] === ''){
                                                // console.log("bad!", ques)
                                                noCommArr.push(entry);
                                                this.setState({AllowContinue: false});
                                        }
                                }
                        })
                })
                Object.entries(this.props.exteriorValues).map((inputField) =>{
                        
                        if (inputField[0].includes("q") && !inputField[0].includes("Comments") ){
                        // console.log(inputField);
                            if(inputField[1].length < 1 || inputField[1] === '' ){
                                this.setState({AllowContinue: false});
                                this.setState({emptyFlag: true});
                                emptyRespArr.push(inputField[0]);
                            }
                        }
        
        
                })
                console.log(emptyRespArr)
                noCommArr.map((entry)=>{
                        this.valdateQues(entry.slice(1))

                })

                emptyRespArr.map((entry)=>{
                        // this.valdateEmptyInput(entry.match(/(\d+)/)[0])

                        this.valdateEmptyInput(entry.slice(1))

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
        // state = {
        //         visible:false
        // }
        // toggle(){
        //         this.setState({
        //                 visible: ! this.state.visible
                 
        //  })
        // }
    
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
        notify = (e) => {

                toast.warn(`You selected ${e.target.value},
                please provide comments`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 5000
                });
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

        update = () => toast.update({ type: toast.TYPE.INFO, autoClose: 5000 });

        render(){
                const {exteriorValues, handleChange,HomeSafetyChange,InjurySafetyChange,LifeSafetyChange} = this.props;
               
                return(
                        <div>
                                <div className="grid-containerE">
                                        <div className="questionsE grid-child">
                                                
                                                <h3>House Details</h3>
                                                
                                                <div className="quesE">1. Is the house address visible ?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q1')}>   
                                                        <input type="radio" value="Yes" name="q1" defaultChecked={exteriorValues.q1 === "Yes"} onClick={HomeSafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q1" defaultChecked={exteriorValues.q1 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q1" defaultChecked={exteriorValues.q1 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div>
                                                
                                                <p/>
                                                <div>       
                                                        <textarea className="CommentSetting"  placeholder=" Enter Comments.." defaultValue={exteriorValues.q1Comments} onChange={handleChange('q1Comments')} ></textarea>
                                                </div><p/>
                                                
                                                
                                        </div>

                                        <div className="infotopE grid-child"  >
                                                
                                                <p><b>Consideration:</b> If safety or rescue personnel from outside 
                                                the community respond, they will need an address to find the home.</p>
                                                <p><b>Recommendation:</b> If <u>No</u> - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, and free from vegetation making it easy to see them from the street.</p>
                                                

                                        </div>
                                

                                        <div className="questionsE grid-child">
                                                
                                                <h3 >Exterior Fuel Tank or Gas Meter</h3>
                                                
                                                <div className="quesE">2. Do they have visible shutoff valves ?</div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q2')}>   
                                                        <input type="radio" value="Yes" name="q2" defaultChecked={exteriorValues.q2 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q2" defaultChecked={exteriorValues.q2 === "No" } onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q2" defaultChecked={exteriorValues.q2 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q2Comments} onChange={handleChange('q2Comments')}></textarea>
                                                </div><p/>

                                        </div>

                                        <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> During an emergency, the gas or propane may
                                                        need to be shut off for the safety of responders.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the shutoff valves be
                                                        located and tested in the on and off position
                                                </p>

                                        </div>

                                        <div className="questionsE grid-child">
                                                <h3 >Electrical Service Entry </h3>
                                                <div className="quesE">3. Are the electrical wires securely
                                                attached to the Home, and free from tree limbs?</div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q3')}>   
                                                        <input type="radio" value="Yes" name="q3" defaultChecked={exteriorValues.q3 === "Yes"} onClick={HomeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q3" defaultChecked={exteriorValues.q3 === "No"} onClick={this.HomeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q3" defaultChecked={exteriorValues.q3 === "N/A"} onClick={this.HomeNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q3Comments} onChange={handleChange('q3Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> If the electrical wires are not securely attached to the building or are knocked off the building, 
                                                        there is a possibility of electrical shock.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend contacting the utility provider. Tree limbs should be removed.
                                                </p>

                                        </div>

                                        <div className="questionsE grid-child">
                                                <h3 >Steps And Handrails</h3>
                                                <div className="quesE">4. Are the steps and handrails attached securely?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q4')}>   
                                                        <input type="radio" value="Yes" name="q4" defaultChecked={exteriorValues.q4 === "Yes"} onClick={InjurySafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q4" defaultChecked={exteriorValues.q4 === "No"} onClick={this.injuryNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q4" defaultChecked={exteriorValues.q4 === "N/A"} onClick={this.injuryNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q4Comments} onChange={handleChange('q4Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> Steps and handrails that are in poor condition may break when someone is using them. 
                                                        This could cause someone to fall or become injured.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend steps and/or handrails be repaired and secured.
                                                </p>

                                        </div> 
                                        
                                        <div className="questionsE grid-child">
                                                <div className="quesE">5. Are the walkway and stairs free
                                                from trip hazards?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q5')}>   
                                                        <input type="radio" value="Yes" name="q5" defaultChecked={exteriorValues.q5 === "Yes"} onClick={InjurySafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q5" defaultChecked={exteriorValues.q5 === "No"} onClick={this.injuryNotify}/> No &emsp;
                                                        <input type="radio" value="No"  name="q5" defaultChecked={exteriorValues.q5 === "N/A"} onClick={this.injuryNotify}/> N/A &emsp;

                                                </div> 
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting"  placeholder="Enter Comments.." defaultValue={exteriorValues.q5Comments} onChange={handleChange('q5Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> Trip hazards could cause injuries to people coming or going from the home. 
                                                        Trip hazards may become less obvious in the dark, rain or snow<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend repair and/or removal of any trip hazards.
                                                </p>

                                        </div>

                                        <div className="questionsE grid-child">
                                                <h3 >Exterior Outlets</h3>
                                                <div className="quesE">6. Do the exterior outlets have working covers?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q6')}>   
                                                        <input type="radio" value="Yes" name="q6" defaultChecked={exteriorValues.q6 === "Yes"} onClick={InjurySafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q6" defaultChecked={exteriorValues.q6 === "No"} onClick={this.injuryNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q6" defaultChecked={exteriorValues.q6 === "N/A"} onClick={this.injuryNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q6Comments} onChange={handleChange('q6Comments')}></textarea>
                                                </div><p/>

                                                <div className="quesE">7. Are the exterior outlets GFCI outlets?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q7')}>   
                                                        <input type="radio" value="Yes" name="q7" defaultChecked={exteriorValues.q7 === "Yes"} onClick={InjurySafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q7" defaultChecked={exteriorValues.q7 === "No"} onClick={this.injuryNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q7" defaultChecked={exteriorValues.q7 === "N/A"} onClick={this.injuryNotify}/> N/A
                                                </div>

                                                
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q7Comments} onChange={handleChange('q7Comments')}></textarea>
                                                </div><p/>
                                                {/* <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> There is a high chance that someone using an item that is plugged in near water could suffer an electric shock if
                                                        the item comes into contact with water and the outlet is not a GFCI outlet.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend replacing any outlets within 6 feet of a water source with GFCI outlets.
                                                </p>

                                                </div> */}
                                                <div className="quesE">8. Are all the outlets working?</div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q8')}>   
                                                        <input type="radio" value="Yes" name="q8" defaultChecked={exteriorValues.q8 === "Yes"} onClick={InjurySafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No"  name="q8" defaultChecked={exteriorValues.q8 === "No"} onClick={this.injuryNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q8" defaultChecked={exteriorValues.q8 === "N/A"} onClick={this.injuryNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting"  placeholder=" Enter Comments.." defaultValue={exteriorValues.q8Comments} onChange={handleChange('q8Comments')}></textarea>
                                                </div><p/>
                                                <div className="quesE">9. Do all the electrical breakers work? </div>&emsp;    
                                                <div className="radioOptions" onChange={handleChange('q9')}>   
                                                        <input type="radio" value="Yes" name="q9" defaultChecked={exteriorValues.q9 === "Yes"} onClick={LifeSafetyChange}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q9" defaultChecked={exteriorValues.q9 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q9" defaultChecked={exteriorValues.q9 === "N/A"} onClick={this.lifeNotify}/> N/A
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q9Comments} onChange={handleChange('q9Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infoE grid-child">
                                                <p>
                                                        <b>Consideration:</b> If proper outlets and covers are not in place, there is a risk of electric shock.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend repair or replace as necessary.
                                                </p>
                                        </div>


                                        <div className="questionsE grid-child">
                                                <h3 >Exterior Doors</h3>
                                                <div className="quesE">10. Are all of the electrical outlets able to function? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q10')}>   
                                                        <input type="radio" value="Yes" name="q10" defaultChecked={exteriorValues.q10 === "Yes"}  onClick={LifeSafetyChange} /> Yes &emsp;
                                                        <input type="radio" value="No"  name="q10" defaultChecked={exteriorValues.q10 === "No"} onClick={this.lifeNotify}/> No &emsp;
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea className="CommentSetting" placeholder=" Enter Comments.." defaultValue={exteriorValues.q10Comments} onChange={handleChange('q10Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="infobottomE grid-child">
                                                <p>
                                                        <b>Consideration:</b> In an emergency, if any of the exits are blocked 
                                                        there is a chance occupants may not be able to escape.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend obstructions be removed, and doors fixed as required so they work properly.
                                                </p>

                                        </div>  
                                       
                                </div><br/>
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