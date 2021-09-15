// import { Component } from  "react"
import {BsPeopleCircle} from "react-icons/bs"
import "./InteriorDetails.css"
function InteriorDetails(){
        return(
                <div class="form-header">
                        <section className="questions">
                                <h3 >SMOKE / CO DETECTORS</h3>
                                <BsPeopleCircle/>&emsp;<label>8. Are there smoke/CO detectors installed in the home?
                                Smoke: </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Smoke/CO detectors alert the occupants in the house of the danger of a fire or elevated carbon monoxide levels.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend installation where needed, 
                                                change batteries and check expiration dates. Recommend a minimum of 1 smoke/CO detector on each floor.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/> 
                                <label>8a. Do they work when tested? Co: </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No      
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>FIRE EXTINGUISHERS:</h3>
                                <BsPeopleCircle/>&emsp;<label>9. Is there a minimum of 1 fire 
                                extinguisher on each floor? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> In case a small fire takes place, 
                                                any person in the home could use the fire extinguisher to put the fire out and prevent a more serious large fire.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend purchasing at least 1 (Class A,B,C) fire extinguisher per floor. 
                                                Recommend 1 fire extinguisher to be installed in the kitchen. 
                                                Fire extinguishers should be placed within 30 feet of furnaces and/or wood stoves.<br/>
                                                If <u>Yes</u> - Check expiration date, class and pressure gauge (needle is in the Green) to ensure they will work if needed.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>DOORS AND WINDOWS:</h3>
                                <BsPeopleCircle/>&emsp;<label>10. Are all doors and windows clear 
                                of obstructions and do they open? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> The presence of mould indicates an underlying issue. 
                                                Mould and dampconditions can cause a variety of health issues.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend the cause of the mould / dampness be identified and fixed. 
                                                A qualified person should perform a mould test and recommend mitigation.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>    
                                <label>11. Is the home free of black mould-like stains, a musty scent
                                or any evidence of water leaking or seeping in? <br/><br/>
                                If no, EHO / Remediation Contact advised?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/> 
                                Name:&emsp; <input type="text" />&emsp;
                                Phone Number:&emsp; <input type="text" /><p/> 
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>STAIRCASE AND HANDRAILS:</h3>
                                <BsPeopleCircle/>&emsp;<label>12. Is the staircase clear of 
                                obstructions and are the stairs and handrails secure?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> : Obstructions on the stairs can be a trip hazard and can make it hard for people to escape the building safely
                                                and for responders to get in to provide help. Unsecured steps and/ or handrails could cause someone to fall or become injured.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions so that stairs are clear in case of an emergency. 
                                                Repair steps and handrails as required. 
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>PLUMBING:</h3>
                                <BsPeopleCircle/>&emsp;<label>13. Are the bathroom, kitchen and/or 
                                laundry room sinks free of leaks?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Mould and damp conditions can cause a variety of health issues. 
                                                Leaking water will cause decay to the building.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend leaks are repaired. 
                                                If there is mould, have a test performed by a qualified person.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>ELECTRICAL:</h3>
                                <BsPeopleCircle/>&emsp;<label>14. Is the electrical panel easy 
                                to access and free from clutter? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> In the case of an emergency, rescue personnel may need to turn off the electricity at the panel.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend moving obstructions a minimum of 4 feet in front of the panel and 2 feet from the sides.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>15. Are outlets installed within 6 feet 
                                of sinks, baths or any other water source GFCI outlets? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> There is a high chance that someone using an item that is plugged in near water could suffer an electric shock if
                                                the item comes into contact with water and the outlet is not a GFCI outlet.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend replacing any outlets within 6 feet of a water source with GFCI outlets.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>16. Are electrical outlets in all rooms in the house functioning
                                and there have been no problems with any of the outlets?
                                </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Proper electrical current will keep the wires from overheating when used. 
                                                If improper electrical current travels through the wiring, over time it could overheat and start a fire.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend there may be a polarity issue. Have the electrical current flow tested.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>17. Do all light switches and outlets have covers and are they
                                free from discolouration?
                                </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> : PLight switch and outlet covers are there to prevent any possible shock hazards. 
                                                If the covers are discoloured, this is a sign that there may be a problem with the electrical current flow<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend any damaged covers be replaced.

                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HEATING SYSTEMS:</h3>
                                <BsPeopleCircle/>&emsp;<label>18. Is the furnace clear of obstructions 
                                and combustible materials?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Furnaces require at least 2 feet of clearance around them to remain cool and not overheat. 
                                                If the furnace was to overheat, it will not work properly, may breakdown or may even catch fire.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend removing obstructions and combustible materials a minimum of 2 feet away from the furnace.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>19. Does the furnace appear to be in good condition? 
                                Is it clean and free from dust and discoloration on the main body and
                                venting?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> A furnace is used to heat a home. It also exchanges the air in the home, meaning it freshens the air occupants breathe. 
                                                It is important to keep the filter and the area around the furnace clean for fresh air<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend a qualified technician service, and if necessary repair, the furnace. 
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HEATING SYSTEMS:</h3>
                                <BsPeopleCircle/>&emsp;<label>20. Is there a shutoff valve on or near 
                                the furnace and does the furnace turn on right away when the thermostat 
                                is turned up? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> In the case of an emergency, the responders may need to turn off the gas valve to the furnace. 
                                                Someone doing maintenance may also need to turn off the gas valve. 
                                                If the furnace does not react promptly to the thermostat being turned up, this may indicate problems with the furnace.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend a qualified gas technician repair and service the furnace.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>BASEBOARDS AND SPACE HEATERS:</h3>
                                <BsPeopleCircle/>&emsp;<label>21. Are the baseboards and space heaters clear of
                                obstructions?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> : Baseboards and space heaters operate at high temperatures. 
                                                It is important to keep articles 2 feet away from baseboards and space heaters when they are on to avoid the possibility of a fire.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend obstructions be moved at least 2 feet away. 
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>
                        
                        <section className="questions">
                                <label>22. Are the baseboards and space heaters functioning
                                properly? When you turn up the thermostat do, they heat up?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Baseboards and space heaters operate at high temperatures. 
                                                It is important to make sure they work properly to avoid the possibility of a fire.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend the baseboards and/or space heaters be repaired or replaced as necessary.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>23. Do the baseboards appear to be in good condition? Are
                                they free from dust and discoloration?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If the baseboards are discoloured with blackish, brown stains they may be over heating which could eventually cause a fire<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend the baseboards be repaired or replaced as necessary.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>WOOD STOVE:</h3>
                                <BsPeopleCircle/>&emsp;<label>24. Is the Exterior chimney free of any cracks, missing bricks
                                or chimney cap, or black creosote buildup?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> A chimney with obvious cracks, missing bricks, missing chimney cap, 
                                                or creosote buildup most likely has structural damage or is not working properly and the chance of having a chimney fire is much higher<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend the chimney be repaired and serviced by a certified WETT technician.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>25. Does the wood stove and interior chimney appear to be in
                                good condition? Is the glass door free from cracks and black discolouration?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If a wood stove or chimney has signs of leaking joints or any cracks or discolouration, 
                                                it is not functioning properly and is becoming a fire hazard.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend a certified WETT technician repair and service as required.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>26. Is there a working smoke/CO detector centrally located on
                                the ceiling but not closer than 20 feet of the wood stove or
                                fireplace?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> It is important not to put the detector too close to the fireplace or woodstove because quite often smoke is released in the home while the 
                                                wood stove or fireplace is being lit or refuelled. 
                                                If the detector is too close, it will set off a false alarm current flow.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend a smoke/CO detector be installed (or moved) a minimum 20 feet from the wood stove or fireplace.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>27. Is there a fire extinguisher within 20 feet of the wood stove
                                or fireplace but not closer than 10 feet?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> Fire extinguishers should be kept a minimum of 10 feet away from a woodstove or fireplace. 
                                                In case there is a fire, you can locate the extinguisher and use it as you approach the wood stove or fireplace.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend a fire extinguisher be placed no closer than 10 feet.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HOME SAFETY PLAN:</h3>
                                <BsPeopleCircle/>&emsp;<label>28. Does the household have a safety plan and a meeting
                                location in place?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> A safety plan will let everyone in the home know how to escape and get to a safe meeting location. 
                                                This will also be very helpful when responders arrive if anyone is missing.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend create, modify and review a plan that consists of: 
                                                all escape routes using doors and windows., a determined meeting place. Do these escape routes work, during all seasons?<br/>
                                                • are the occupants aware that they should not re-enter the home under any circumstance?<br/>
                                                • Review the safety plan and practice it annually.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No 
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>29. Is there a list of emergency numbers and contacts?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> In the case of an emergency, there should be a list of emergency numbers close to the phone for anyone who is there to use.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend review or create a new list of numbers that include emergency services and at least 2 people that live close by.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>30. Is there a phone that works without power?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If there is a power outage, any house phones that operate on electricity will not work.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend that the house have a phone that works without power.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="4" cols="60" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section>
                </div>
        );
}
export default InteriorDetails;