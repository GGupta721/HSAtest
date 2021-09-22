import { Component } from "react"
import "./exterior.css"

class Exterior extends Component {
        render() {
                return (
                        <div className="ext-div">
                                <h4>Exterior</h4>
                                <div className="ext-details">
                                        <div className="left-info"/>
                                        <div className="right-info"/>
                                </div>
                        </div>
                )
        }
}

export default Exterior;
