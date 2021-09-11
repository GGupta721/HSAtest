import { Component } from  "react"
import {BsPeopleCircle} from "react-icons/bs"
import "./Exterior.css"

function Exterior()  {
return(
       

        <div class="form-header">
        <h3 >House Details</h3>
       
        <BsPeopleCircle/>&emsp;<label>Is the house address visible ?</label>&emsp;      
        
       
        <input type="radio" value="Yes" name="options" /> Yes &emsp;
        <input type="radio" value="No" name="options" /> No &emsp;
        <input type="radio" value="N/A" name="options" /> N/A 
        <p/>
                
        <div>       
        <textarea rows="4" cols="40"  ></textarea>
        </div>
        
        </div>


        )
}
export default Exterior;