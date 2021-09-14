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
                                <h3 >Electrical Service Entry </h3>
                                
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
                                <div className="radioOptions">   
                                    <input type="radio" value="Yes" name="options" /> Yes &emsp;
                                    <input type="radio" value="No" name="options" /> No &emsp;
                                    <input type="radio" value="N/A" name="options" /> N/A
                                </div>
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
                                are they GFCI outlets; is there proper current flow to the outlets; does the 
                                does the outlet breaker work?
                                </label>&emsp;
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

                </div>
        );
}
export default Exterior;