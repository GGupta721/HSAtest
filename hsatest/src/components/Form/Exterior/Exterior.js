import React from  "react"
import "./Exterior.css"
// import PopoverPopupState from "../PopoverCommentRequired";
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Popover from '@mui/material/Popover';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

class Exterior extends React.Component{

        continue = (eve) => {
                eve.preventDefault();
                this.props.nextPage();
        }

        previous = (eve) => {
                eve.preventDefault();
                this.props.prevPage();
        }

        render(){
                const {exteriorValues, handleChange} = this.props;

                return(
                        <div class="grid-container">
                                <div className="questions grid-child">
                                        
                                        <h3>House Details</h3>
                                        
                                        <div className="ques">1. Is the house address visible ?</div>&emsp;
                                        <div className="radioOptions" onChange={handleChange('q1')}>   
                                                <input type="radio" value="Yes" name="q1" checked={exteriorValues.q1 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q1" checked={exteriorValues.q1 === "No"} /> No &emsp;
                                                <input type="radio" value="N/A" name="q1" checked={exteriorValues.q1 === "N/A"} /> N/A
                                        </div>
                                        
                                        <p/>
                                        <div>       
                                                <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q1Comments} onChange={handleChange('q1Comments')} ></textarea>
                                        </div><p/>
                                        
                                        
                                </div>

                                <div className="info grid-child">
                                        
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
                                                <input type="radio" value="Yes" name="q2" checked={exteriorValues.q2 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q2" checked={exteriorValues.q2 === "No"} /> No &emsp;
                                                <input type="radio" value="N/A" name="q2" checked={exteriorValues.q2 === "N/A"} /> N/A
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
                                                <input type="radio" value="Yes" name="q3" checked={exteriorValues.q3 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q3" checked={exteriorValues.q3 === "No"} /> No &emsp;
                                                <input type="radio" value="N/A" name="q3" checked={exteriorValues.q3 === "N/A"} /> N/A
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
                                                <input type="radio" value="Yes" name="q4" checked={exteriorValues.q4 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q4" checked={exteriorValues.q4 === "No"} /> No &emsp;
                                                <input type="radio" value="N/A" name="q4" checked={exteriorValues.q4 === "N/A"} /> N/A
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
                                                <input type="radio" value="Yes" name="q5" checked={exteriorValues.q5 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q5" checked={exteriorValues.q5 === "No"} /> No &emsp;
                                        </div> 
                                        
                                        <p/>       
                                        <div>       
                                                <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q5Comments} onChange={handleChange('q5Comments')}></textarea>
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
                                        <div className="ques">6. Do the exterior outlets have working covers; 
                                        are they GFCI outlets; is there proper current flow to the outlets; does the 
                                        does the outlet breaker work?
                                        </div>&emsp;    
                                        <div className="radioOptions" onChange={handleChange('q6')}>   
                                                <input type="radio" value="Yes" name="q6" checked={exteriorValues.q6 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q6" checked={exteriorValues.q6 === "No"} /> No &emsp;
                                                <input type="radio" value="N/A" name="q6" checked={exteriorValues.q6 === "N/A"} /> N/A
                                        </div>
                                        
                                        <p/>       
                                        <div>       
                                                <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q6Comments} onChange={handleChange('q6Comments')}></textarea>
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
                                        <div className="ques">7. Are all exterior doors clear of obstructions
                                        and in good working order so they can be used in case of an emergency? </div>&emsp;
                                        <div className="radioOptions" onChange={handleChange('q7')}>   
                                                <input type="radio" value="Yes" name="q7" checked={exteriorValues.q7 === "Yes"} /> Yes &emsp;
                                                <input type="radio" value="No" name="q7" checked={exteriorValues.q7 === "No"} /> No &emsp;
                                        </div>
                                        
                                        <p/>       
                                        <div>       
                                                <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={exteriorValues.q7Comments} onChange={handleChange('q7Comments')}></textarea>
                                        </div><p/>
                                </div>
                                <div className="info grid-child">
                                        <p>
                                                <b>Consideration:</b> In an emergency, if any of the exits are blocked, 
                                                there is a chance people will not be able to escape.<br/><br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend obstructions be removed and doors fixed if required so they work properly.
                                        </p>

                                </div>  
                                <button onClick={this.previous}>Previous</button>
                                <button onClick={this.continue}>Continue</button>
                        </div>
                                                  
                );
        }
}
export default Exterior;