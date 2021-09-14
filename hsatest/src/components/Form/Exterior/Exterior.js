// import { Component } from  "react"
import {BsPeopleCircle} from "react-icons/bs"
import "./Exterior.css"
import Info from "./info";

function Exterior(){
        return(
                <div class="form-header">
                        <section className="questions">
                                <h3>House Details</h3>
                                <BsPeopleCircle/>&emsp;<label>1. Is the house address visible ?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                <p/>
                                
                                
                        </section><br/>

                        <section className="questions">
                                <h3 >Exterior Fuel Tank or Gas Meter</h3>
                                <BsPeopleCircle/>&emsp;<label>2. Do they have visible shutoff valves ?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> During an emergency, the gas or propane may
                                                need to be shut off for the safety of responders.<br/>
                                                <b>Recommendation:</b> If <u>No</u> - Recommend the shutoff valves be
                                                located and tested in the on and off position
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3 >Electrical Service Entry *** if No provide a comment</h3>
                                
                                <BsPeopleCircle/>&emsp;<label>3. Are the electrical wires securely
                                attached to the building, and free from tree limbs?</label>&emsp; 
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>     
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3 >Steps And Handrails</h3>
                                <BsPeopleCircle/>&emsp;<label>4. Are the steps and handrails 
                                free of rot and cracks? Are the stairs and handrails secure?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>
                        
                        <section className="questions">
                                <BsPeopleCircle/>&emsp;<label>5. Is the walkway and stairs free
                                from trip hazards?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3 >Exterior Outlets</h3>
                                <BsPeopleCircle/>&emsp;<label>6. Do the exterior outlets have working covers; 
                                are they GFCI outlets; is there proper current flow to the outlets; does the </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3 >Exterior Door</h3>
                                <BsPeopleCircle/>&emsp;<label>7. Are all exterior doors clear of obstructions
                                and in good working order so they can be used in case of an emergency? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3 >Exterior Door</h3>
                                <BsPeopleCircle/>&emsp;<label>8. Are there smoke/CO detectors installed in the home?
                                Smoke: </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/> 
                                <label>8a. Do they work when tested? Co: </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No      
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>FIRE EXTINGUISHERS:</h3>
                                <BsPeopleCircle/>&emsp;<label>9. Is there a minimum of 1 fire 
                                extinguisher on each floor? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>DOORS AND WINDOWS:</h3>
                                <BsPeopleCircle/>&emsp;<label>10. Are all doors and windows clear 
                                of obstructions and do they open? </label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
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
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>STAIRCASE AND HANDRAILS:</h3>
                                <BsPeopleCircle/>&emsp;<label>12. Is the staircase clear of 
                                obstructions and are the stairs and handrails secure?</label>&emsp;
                                <div className="info right">
                                        <p>
                                                <b>Consideration:</b> If outside safety or rescue personnel respond, 
                                                they will need an address to find the home.<br/>
                                                <b>Recommendation:</b> If No - Recommend house numbers be a 
                                                different colour than the background, illuminated and 
                                                reflective, making it easy see from the street.
                                        </p>

                                </div>      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>PLUMBING:</h3>
                                <BsPeopleCircle/>&emsp;<label>13. Are the bathroom, kitchen and/or 
                                laundry room sinks free of leaks?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>ELECTRICAL:</h3>
                                <BsPeopleCircle/>&emsp;<label>14. Is the electrical panel easy 
                                to access and free from clutter? </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>15. Are outlets installed within 6 feet 
                                of sinks, baths or any other water source GFCI outlets? </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>16. Are electrical outlets in all rooms in the house functioning
                                and there have been no problems with any of the outlets?
                                </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>17. Do all light switches and outlets have covers and are they
                                free from discolouration?
                                </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HEATING SYSTEMS:</h3>
                                <BsPeopleCircle/>&emsp;<label>18. Is the furnace clear of obstructions 
                                and combustible materials?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>19. Does the furnace appear to be in good condition? 
                                Is it clean and free from dust and</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HEATING SYSTEMS:</h3>
                                <BsPeopleCircle/>&emsp;<label>20. Is there a shutoff valve on or near 
                                the furnace and does the furnace turn on right away when the thermostat 
                                is turned? </label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>BASEBOARDS AND SPACE HEATERS:</h3>
                                <BsPeopleCircle/>&emsp;<label>21. Are the baseboards and space heaters clear of
                                obstructions?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>
                        
                        <section className="questions">
                                <label>22. Are the baseboards and space heaters functioning
                                properly? When you turn up the thermostat do, they heat up?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>23. Do the baseboards appear to be in good condition? Are
                                they free from dust and discoloration?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>WOOD STOVE:</h3>
                                <BsPeopleCircle/>&emsp;<label>24. Is the Exterior chimney free of any cracks, missing bricks
                                or chimney cap, or black creosote buildup?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>25. Does the wood stove and interior chimney appear to be in
                                good condition? Is the glass door free from cracks and black discolouration?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>26. Is there a working smoke/CO detector centrally located on
                                the ceiling but not closer than 20 feet of the wood stove or
                                fireplace?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>27. Is there a fire extinguisher within 20 feet of the wood stove
                                or fireplace but not closer than 10 feet?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No &emsp;
                                <input type="radio" value="N/A" name="options" /> N/A 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <h3>HOME SAFETY PLAN:</h3>
                                <BsPeopleCircle/>&emsp;<label>28. Does the household have a safety plan and a meeting
                                location in place?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No 
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>29.Is there a list of emergency numbers and contacts?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section><br/>

                        <section className="questions">
                                <label>30 .Is there a phone that works without power?</label>&emsp;      
                                <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                <input type="radio" value="No" name="options" /> No
                                <p/>       
                                <div>       
                                        <textarea rows="3" cols="40" placeholder="Enter Comments.." ></textarea>
                                </div><p/>
                        </section>
                </div>
        );
}
export default Exterior;