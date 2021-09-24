import {Component} from "react";
import "./Report.css";


class Report extends Component {
    render()
    {
        return(
            <div className="pageContent">
            <table >
                <tr>
                    <th style={{width:300}}>Safety</th>
                    <th style={{width:150}}>Number Of Findings</th>
                    <th style={{width:150}}>Total Count of Findings</th>
                    <th style={{width:150}}>Total Count Per Area</th>
                    <th style={{width:150}}>Percentage</th>
                </tr>
                <tr>
                    <td style={{color:"lightseagreen"}}>Building Safety Report</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                
                </tr>
                <tr>
                    <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                    <td style={{ border:"2px solid black"}}></td>
                    <td style={{ border:"2px solid black"}}></td>
                    <td style={{ border:"2px solid black"}}></td>
                    <td style={{ border:"2px solid black"}}></td>
                </tr>
            </table>
            </div>
        );
    }

}

export default Report