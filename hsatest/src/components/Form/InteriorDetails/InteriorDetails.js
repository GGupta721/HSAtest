// import { Component } from  "react"
import React from "react"
import {BsPeopleCircle} from "react-icons/bs"
import "./InteriorDetails.css"
class InteriorDetails extends React.Component{

        continue = (eve) => {
                eve.preventDefault();
                this.props.nextPage();
        }

        previous = (eve) => {
                eve.preventDefault();
                this.props.prevPage();
        }

        render(){
                const {interiorValues, handleChange} = this.props;

                return(
                        <div class="form-header">
                                <div class="grid-container">
                                <div className="questions grid-child">
                                                <h3 >SMOKE </h3>
                                                <div className="ques">8. Are there smoke installed in the home?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q8')}>   
                                                        <input type="radio" value="Yes" name="q8" checked={interiorValues.q8 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q8" checked={interiorValues.q8 === "No"}/> No &emsp;
                                                </div>
                                                
                                                &emsp;&emsp; 
                                                <div className="ques">9. How many smoke detectors on site ?<p/>
                                                <input type="number" placeholder= " Number of Smoke Detectors" step="1" defaultValue={interiorValues.q9} onChange={handleChange('q9')}/>
                                                </div><p/>
                                                <div className="ques">10. Expiry date for Smoke detector ?<p/>
                                                <input type="Date" className="inputV4"/>
                                                </div><p/>
                                                <div className="ques">11. Do they work when tested? </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q10')}>
                                                        <input type="radio" value="Yes" name="q11"checked={interiorValues.q11 === "Yes"} />Yes &emsp;
                                                        <input type="radio" value="No" name="q11" checked={interiorValues.q11 === "No"}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q11Comments} onChange={handleChange('q11Comments')}></textarea>
                                                </div><p/>

                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Smoke detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed, 
                                                        change batteries and check expiration dates. Recommend a minimum of 1 smoke detector on each floor.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3 >CARBONMONOXIDE DETECTORS </h3>
                                                <div className="ques">12. Are there Carbonmonoxide installed in the home?</div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q12')}>   
                                                        <input type="radio" value="Yes" name="q12" checked={interiorValues.q12 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q12" checked={interiorValues.q12 === "No"}/> No &emsp;
                                                </div><p/>
                                                <div className="ques">13. How many Carbonmonoxide detectors on site ?<p/>
                                                <input type="number" placeholder= " Number of Co Detectors" step="1" defaultValue={interiorValues.q13} onChange={handleChange('q13')}/>
                                                </div><p/>
                                                <div className="ques">14. Expiry date for Carbonmonoxide detector ?<p/>
                                                <input type="Date" className="inputV4"/>
                                                </div><p/>
                                                &emsp;&emsp; 
                                                <div className="ques">15. Do they work when tested? </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q11')}>
                                                        <input type="radio" value="Yes" name="q15"checked={interiorValues.q15 === "Yes"} />Yes &emsp;
                                                        <input type="radio" value="No" name="q15" checked={interiorValues.q15 === "No"}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q15Comments} onChange={handleChange('q15Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Carbonmonoxide detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed, 
                                                        change batteries and check expiration dates. Recommend a minimum of 1 Carbonmonoxide detector on each floor.
                                                </p>

                                        </div>                                        

                                        <div className="questions grid-child">
                                                <h3 >SMOKE / CARBONMONOXIDE DETECTORS</h3>
                                                <div className="ques">16. Are there smoke/CO detectors installed in the home?
                                                 </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q16')}>   
                                                        <input type="radio" value="Yes" name="q16" checked={interiorValues.q16 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q16" checked={interiorValues.q16 === "No"}/> No &emsp;
                                                </div>
                                                <p/>
                                                <div className="ques">17. How many Smoke/Carbonmonoxide detectors on site ?<p/>
                                                <input type="number" placeholder= " Number of Smoke/Co Detectors" step="1" defaultValue={interiorValues.q17} onChange={handleChange('q17')}/>
                                                </div><p/>
                                                <div className="ques">18. Expiry date for Smoke/Carbonmonoxide detector ?<p/>
                                                <input type="Date" className="inputV4"/>
                                                </div><p/>
                                                &emsp;&emsp; 
                                                <div className="ques">19. Do they work when tested?  </div>&emsp;      
                                                <div className="radioOptions" onChange={handleChange('q19')}>
                                                        <input type="radio" value="Yes" name="q19"checked={interiorValues.q19 === "Yes"} />Yes &emsp;
                                                        <input type="radio" value="No" name="q19" checked={interiorValues.q19 === "No"}/> No &emsp;
                                                </div>      
                                                <p/>
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q19Comments} onChange={handleChange('q19Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Smoke/Carbonmonoxide detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed, 
                                                        change batteries and check expiration dates. Recommend a minimum of 1 smoke/Carbonmonoxide detector on each floor.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>FIRE EXTINGUISHERS:</h3>
                                                <div className="ques">20. Is there a minimum of 1 fire 
                                                extinguisher on each floor? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q20')}>   
                                                        <input type="radio" value="Yes" name="q20" checked={interiorValues.q20 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q20" checked={interiorValues.q20 === "No"}/> No &emsp;
                                                </div>
                                                
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q9Comments} onChange={handleChange('q9Comments')}></textarea>
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
                                                <h3>DOORS AND WINDOWS:</h3>
                                                <div className="ques">21. Are all doors and windows clear 
                                                of obstructions and do they open? </div>&emsp;
                                                <div className="radioOptions" onChange={handleChange('q21')}>   
                                                        <input type="radio" value="Yes" name="q21" checked={interiorValues.q21 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q21" checked={interiorValues.q21 === "No"}/> No &emsp;
                                                </div>
                                                
                                                <p/>    

                                        </div><p/> 

                                        <div className="questions grid-child">
                                                <h3>ENVIRONMENTAL</h3>
                                                <div className="ques">22. Is the home free of  mould-like stains, a musty scent
                                                or any evidence of water leaking or seeping in? </div><p/>
                                                <div className="radioOptions" onChange={handleChange('q22')}>   
                                                        <input type="radio" value="Yes" name="q22" checked={interiorValues.q22 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q22" checked={interiorValues.q22 === "No"}/> No &emsp;
                                                </div><p/>
                                                
                                                <div className="ques">23. If no:</div><p/>
                                                <div className="ques"> EHO / Remediation Contact advised?</div>     
                                                <p/> 
                                                Name:&emsp; <input type="text" placeholder="Enter Name" defaultValue={interiorValues.q23Name} onChange={handleChange('q23Name')}/>&emsp;<br/>
                                                Phone Number:&emsp; <input type="text" placeholder="Enter Number" defaultValue={interiorValues.q23PhoneNum} onChange={handleChange('q23PhoneNum')}/><p/> 
                                                <div className="ques"> Where can the mould be found?</div><p/>
                                                <select type="dropdown" defaultValue={interiorValues.mouldLocation} onChange={handleChange('mouldLocation')}>
                                                        <option value="Laundry">Laundry</option>
                                                        <option value="Kitchen"> Kitchen</option>
                                                        <option value="Door">Door</option>
                                                        <option value="Window"> Window</option>
                                                        <option value="Other">Other</option>
                                                </select><p/>
                                                <div className="ques">If others enter location in comments:</div><p/>
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q23Comments} onChange={handleChange('q23Comments')}></textarea>
                                                </div><p/>
                                                </div>


                                                <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> The presence of mould indicates an underlying issue. 
                                                        Mould and dampconditions can cause a variety of health issues.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the cause of the mould / dampness be identified and fixed. 
                                                        A qualified person should perform a mould test and recommend mitigation.
                                                </p>

                                        </div> 
                                       
                                        

                                        <div className="questions grid-child">
                                                <h3>STAIRCASE AND HANDRAILS:</h3>
                                                <div className="ques">24. Is the staircase clear of 
                                                obstructions and are the stairs and handrails secure?</div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q24')}>      
                                                        <input type="radio" value="Yes" name="q24" checked={interiorValues.q24 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q24" checked={interiorValues.q24 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q24" checked={interiorValues.q24 === "N/A"}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q24Comments} onChange={handleChange('q24Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> : Obstructions on the stairs can be a trip hazard and can make it hard for people to escape the building safely
                                                        and for responders to get in to provide help. Unsecured steps and/ or handrails could cause someone to fall or become injured.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions so that stairs are clear in case of an emergency. 
                                                        Repair steps and handrails as required. 
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>PLUMBING:</h3>
                                                <div className="ques">25. Are the bathroom, kitchen and/or 
                                                laundry room sinks free of leaks?</div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q25')}>      
                                                        <input type="radio" value="Yes" name="q25" checked={interiorValues.q25 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q25" checked={interiorValues.q25 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q25Comments} onChange={handleChange('q25Comments')}></textarea>
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
                                                <h3>ELECTRICAL:</h3>
                                                <div className="ques">26. Is the electrical panel easy 
                                                to access and free from clutter? </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q26')}>      
                                                        <input type="radio" value="Yes" name="q26" checked={interiorValues.q26 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q26" checked={interiorValues.q26 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q26Comments} onChange={handleChange('q26Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In the case of an emergency, rescue personnel may need to turn off the electricity at the panel.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend moving obstructions a minimum of 4 feet in front of the panel and 2 feet from the sides.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">27. Are outlets installed within 6 feet 
                                                of sinks, baths or any other water source GFCI outlets? </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q27')}>      
                                                        <input type="radio" value="Yes" name="q27" checked={interiorValues.q27 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q27" checked={interiorValues.q27 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q27Comments} onChange={handleChange('q27Comments')}></textarea>
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
                                                <div className="ques">28. Are electrical outlets in all rooms in the house functioning
                                                and there have been no problems with any of the outlets?
                                                </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q28')}>      
                                                        <input type="radio" value="Yes" name="q28" checked={interiorValues.q28 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q28" checked={interiorValues.q28 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q28Comments} onChange={handleChange('q28Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Proper electrical current will keep the wires from overheating when used. 
                                                        If improper electrical current travels through the wiring, over time it could overheat and start a fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend there may be a polarity issue. Have the electrical current flow tested.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">29. Do all light switches and outlets have covers and are they
                                                free from discolouration?
                                                </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q29')}>      
                                                        <input type="radio" value="Yes" name="q29" checked={interiorValues.q29 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q29" checked={interiorValues.q29 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q29Comments} onChange={handleChange('q29Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> : PLight switch and outlet covers are there to prevent any possible shock hazards. 
                                                        If the covers are discoloured, this is a sign that there may be a problem with the electrical current flow<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend any damaged covers be replaced.

                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>HEATING SYSTEMS:</h3>
                                                <div className="ques">30. Is the furnace clear of obstructions 
                                                and combustible materials?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q30')}>      
                                                        <input type="radio" value="Yes" name="q30" checked={interiorValues.q30 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q30" checked={interiorValues.q30 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q30" checked={interiorValues.q30 === "N/A"}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q30Comments} onChange={handleChange('q30Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> Furnaces require at least 2 feet of clearance around them to remain cool and not overheat. 
                                                        If the furnace was to overheat, it will not work properly, may breakdown or may even catch fire.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions and combustible materials a minimum of 2 feet away from the furnace.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">31. Does the furnace appear to be in good condition? 
                                                Is it clean and free from dust and discoloration on the main body and
                                                venting?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q31')}>      
                                                        <input type="radio" value="Yes" name="q31" checked={interiorValues.q31 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q31" checked={interiorValues.q31 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q31" checked={interiorValues.q31 === "N/A"}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q31Comments} onChange={handleChange('q31Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> A furnace is used to heat a home. It also exchanges the air in the home, meaning it freshens the air occupants breathe. 
                                                        It is important to keep the filter and the area around the furnace clean for fresh air<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a qualified technician service, and if necessary repair, the furnace. 
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <h3>HEATING SYSTEMS:</h3>
                                                <div className="ques">32. Is there a shutoff valve on or near 
                                                the furnace and does the furnace turn on right away when the thermostat 
                                                is turned up? </div>&emsp;
                                                
                                                <div className="radioOptions" onChange={handleChange('q32')}>    
                                                        <input type="radio" value="Yes" name="q32" checked={interiorValues.q32 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q32" checked={interiorValues.q32 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q32" checked={interiorValues.q32 === "N/A"}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q32Comments} onChange={handleChange('q32Comments')}></textarea>
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
                                                <h3>BASEBOARDS AND SPACE HEATERS:</h3>
                                                <div className="ques">33. Are the baseboards and space heaters clear of
                                                obstructions?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q33')}>      
                                                        <input type="radio" value="Yes" name="q33" checked={interiorValues.q33 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q33" checked={interiorValues.q33 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q33" checked={interiorValues.q33 === "N/A"}/> N/A
                                                </div> 
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q33Comments} onChange={handleChange('q33Comments')}></textarea>
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
                                                <div className="ques">34. Are the baseboards and space heaters functioning
                                                properly? When you turn up the thermostat do, they heat up?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q34')}> 
                                                        <input type="radio" value="Yes" name="q34" checked={interiorValues.q34 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q34" checked={interiorValues.q34 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q34" checked={interiorValues.q34 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q34Comments} onChange={handleChange('q34Comments')}></textarea>
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
                                                <div className="ques">35. Do the baseboards appear to be in good condition? Are
                                                they free from dust and discoloration?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q35')}>    
                                                        <input type="radio" value="Yes" name="q35" checked={interiorValues.q35 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q35" checked={interiorValues.q35 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q35" checked={interiorValues.q35 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q35Comments} onChange={handleChange('q35Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> If the baseboards are discoloured with blackish, brown stains they may be over heating which could eventually cause a fire<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend the baseboards be repaired or replaced as necessary.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <h3>WOOD STOVE:</h3>
                                                <div className="ques">36. Is the Exterior chimney free of any cracks, missing bricks
                                                or chimney cap, or black creosote buildup?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q36')}>   
                                                        <input type="radio" value="Yes" name="q36" checked={interiorValues.q36 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q36" checked={interiorValues.q36 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q36" checked={interiorValues.q36 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q36Comments} onChange={handleChange('q36Comments')}></textarea>
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
                                                <div className="ques">37. Does the wood stove and interior chimney appear to be in
                                                good condition? Is the glass door free from cracks and black discolouration?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q37')}>
                                                        <input type="radio" value="Yes" name="q37" checked={interiorValues.q37 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q37" checked={interiorValues.q37 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q37" checked={interiorValues.q37 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q37Comments} onChange={handleChange('q37Comments')}></textarea>
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
                                                <div className="ques">38. Is there a working smoke/CO detector centrally located on
                                                the ceiling but not closer than 20 feet of the wood stove or
                                                fireplace?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q38')}>
                                                        <input type="radio" value="Yes" name="q38" checked={interiorValues.q38 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q38" checked={interiorValues.q38 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q38" checked={interiorValues.q38 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q38Comments} onChange={handleChange('q38Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> It is important not to put the detector too close to the fireplace or woodstove because quite often smoke is released in the home while the 
                                                        wood stove or fireplace is being lit or refuelled. 
                                                        If the detector is too close, it will set off a false alarm current flow.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend a smoke/CO detector be installed (or moved) a minimum 20 feet from the wood stove or fireplace.
                                                </p>

                                        </div>  

                                        <div className="questions grid-child">
                                                <div className="ques">39. Is there a fire extinguisher within 20 feet of the wood stove
                                                or fireplace but not closer than 10 feet?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q39')}>
                                                        <input type="radio" value="Yes" name="q39" checked={interiorValues.q39 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q39" checked={interiorValues.q39 === "No"}/> No &emsp;
                                                        <input type="radio" value="N/A" name="q39" checked={interiorValues.q39 === "N/A"}/> N/A 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q39Comments} onChange={handleChange('q39Comments')}></textarea>
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
                                                <h3>HOME SAFETY PLAN:</h3>
                                                <div className="ques">40. Does the household have a safety plan and a meeting
                                                location in place?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q40')}>
                                                        <input type="radio" value="Yes" name="q40" checked={interiorValues.q40 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q40" checked={interiorValues.q40 === "No"}/> No 
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q40Comments} onChange={handleChange('q40Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> A safety plan will let everyone in the home know how to escape and get to a safe meeting location. 
                                                        This will also be very helpful when responders arrive if anyone is missing.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend create, modify and review a plan that consists of: 
                                                        all escape routes using doors and windows., a determined meeting place. Do these escape routes work, during all seasons?<br/>
                                                        • are the occupants aware that they should not re-enter the home under any circumstance?<br/>
                                                        • Review the safety plan and practice it annually.
                                                </p>

                                        </div>

                                        <div className="questions grid-child">
                                                <div className="ques">41. Is there a list of emergency numbers and contacts?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q41')}>
                                                        <input type="radio" value="Yes" name="q41" checked={interiorValues.q41 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q41" checked={interiorValues.q41 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q41Comments} onChange={handleChange('q41Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
                                                <p>
                                                        <b>Consideration:</b> In the case of an emergency, there should be a list of emergency numbers close to the phone for anyone who is there to use.<br/><br/>
                                                        <b>Recommendation:</b> If <u>No</u> - Recommend review or create a new list of numbers that include emergency services and at least 2 people that live close by.
                                                </p>

                                        </div> 

                                        <div className="questions grid-child">
                                                <div className="ques">42. Is there a phone that works without power?</div>&emsp;
                                        
                                                <div className="radioOptions" onChange={handleChange('q42')}> 
                                                        <input type="radio" value="Yes" name="q42" checked={interiorValues.q42 === "Yes"}/> Yes &emsp;
                                                        <input type="radio" value="No" name="q42" checked={interiorValues.q42 === "No"}/> No
                                                </div>
                                                <p/>       
                                                <div>       
                                                        <textarea rows="3" cols="60" placeholder=" Enter Comments.." defaultValue={interiorValues.q42Comments} onChange={handleChange('q42Comments')}></textarea>
                                                </div><p/>
                                        </div>
                                        <div className="info grid-child">
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
                                <button class="ui right labeled icon button next blue" onClick={this.continue}>
                                        <i class="right arrow icon"></i>
                                        Continue
                                </button>
                        </div>
                );
        }
}

export default InteriorDetails;