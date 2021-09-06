import {Component} from "react"
import "./form.css"

class Form extends Component {
    render() {
        return (
            <div className="form-div">
            <p/>
                <div>
                    <form className="form">
                        <input type="checkbox" />
                        I Acknowledge Reading This Instruction  
                        Assessor's First Name: <input type="text" name="fname" />&nbsp; 
                        Assessor's Last Name: <input type="text" name="lname" />&nbsp;
                        Date: <input type="Date" />
                        <p/>
                        <div className="details">
                            <h4> Occupant's Details</h4>
                            <p/>
                            <div className="oc-details">
                                <section className="block">
                                    Occupant's Fist Name:&emsp; <input type="text" /><p/>
                                    Number of Occupants:&emsp; <select type="dropdown" /><p/>
                                    Number of Bedrooms:&emsp; <select type="dropdown" /><p/>
                                    Number of Floors:&emsp; <select type="dropdown" /><p/>
                                    Approximate Square:&emsp; <input type="text" /><p/>
                                    Adress:&emsp; <textarea rows="4" cols="49"/><p/>
                                    Geolocation (GPS Coordinate):<p/>
                                    Map:
                                </section>
                                <section className="block">
                                    &emsp; Occupant's Last Name:&emsp; <input type="text"/><p/> 
                                    <fieldset>      
                                        <legend>House Type</legend>      
                                        <input type="checkbox" name="house-type" value="Privately-Owned"/>Privately Owned<br/>      
                                        <input type="checkbox" name="house-type" value="Rental"/>Rental<br/>      
                                        <input type="checkbox" name="house-type" value="Social-House"/>Social House<br/>      
                                    </fieldset>  
                                </section>
                            </div>
                        </div><p/>
                        <div className="c-details">
                            <h4> Community Details</h4><p/>
                            <div className="co-details">
                                <section className="block">
                                    Community:&emsp; <input type="text" /><p/>
                                    Representative First Name:&emsp; <input type="text" /><p/>
                                    Representative Email:&emsp; <input type="email" /><p/>
                                    Province:&emsp; <select type="dropdown" /><p/>
                                    BAND#:&emsp; <input type="text" /><p/>
                                </section>
                                <section className="block">
                                    &emsp;Representative Last Name:&emsp; <input type="text" /><p/>
                                    &emsp;Alternative contact detail:&emsp; <input type="text" /><p/>
                                    &emsp;Phone Number:&emsp; <input type="text" /><p/>
                                    Territory:&emsp; <select type="dropdown" /><p/>
                                </section>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form
