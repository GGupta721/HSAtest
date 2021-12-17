import {Component} from "react";
import "./Report.css";
import "../InteriorDetails/InteriorDetails.js";
import {CanvasJSChart} from 'canvasjs-react-charts';
import { maxHeight } from "@mui/system";
// import { threadId } from "worker_threads";




class InteriorChart extends Component {
  
    constructor(props) {
        super(props);
        this.previous=this.previous.bind(this);

       

        this.InteriorHomeSafetyPercent=((this.props.reportValues.InteriorHomeSafety/29)*100).toFixed(2);
        this.InteriorLifeSafetyPercent=((this.props.reportValues.InteriorLifeSafety/29)*100).toFixed(2);
        this.InteriorInjurySafetyPercent=((this.props.reportValues.InteriorInjurySafety/29)*100).toFixed(2);
        this.InteriorHealthSafetyPercent=((this.props.reportValues.InteriorHealthSafety/29)*100).toFixed(2);
        this.totalInterior=this.props.reportValues.InteriorHomeSafety+this.props.reportValues.InteriorInjurySafety+ this.props.reportValues.InteriorHealthSafety+this.props.reportValues.InteriorLifeSafety;
        this.totalInteriorPercent= ((this.totalInterior/29)*100).toFixed(2);
        

        


     
    }
    previous = (eve) => {
        eve.preventDefault();
        this.props.prevPage();
    }
    // continue = async (eve) => {
    //     eve.preventDefault();
    //     this.props.nextPage();

    // }

    // componentDidMount(){
    //     this.ExteriorHomeSafetyPercent=((this.props.reportValues.ExteriorHomeSafety/10)*100).toFixed(2);
    //     this.ExteriorLifeSafetyPercent=((this.props.reportValues.ExteriorLifeSafety/10)*100).toFixed(2);
    //     this.ExteriorInjurySafetyPercent=((this.props.reportValues.ExteriorInjurySafety/10)*100).toFixed(2);
    //     this.ExteriorHealthSafetyPercent=((this.props.reportValues.ExteriorHealthSafety/10)*100).toFixed(2);
    //     this.totalExterior=this.props.reportValues.ExteriorHomeSafety+this.props.reportValues.ExteriorInjurySafety+this.props.reportValues.ExteriorLifeSafety;
    //     this.totalExteriorPercent= ((this.totalExterior/10)*100).toFixed(2);

    //     this.InteriorHomeSafetyPercent=((this.props.reportValues.InteriorHomeSafety/29)*100).toFixed(2);
    //     this.InteriorLifeSafetyPercent=((this.props.reportValues.InteriorLifeSafety/29)*100).toFixed(2);
    //     this.InteriorInjurySafetyPercent=((this.props.reportValues.InteriorInjurySafety/29)*100).toFixed(2);
    //     this.InteriorHealthSafetyPercent=((this.props.reportValues.InteriorHealthSafety/29)*100).toFixed(2);
    //     this.totalInterior=this.props.reportValues.InteriorHomeSafety+this.props.reportValues.InteriorInjurySafety+ this.props.reportValues.InteriorHealthSafety+this.props.reportValues.InteriorLifeSafety;
    //     this.totalInteriorPercent= ((this.totalInterior/29)*100).toFixed(2);

    // }


    render(){
        const{reportValues}=this.props;
        
        const InteriorChart = {
			title: {
				text: ""
			},
            axisY: {
                title: "Actual Scores",
                titleFontColor: "#4F81BC",
                lineColor: "#4F81BC",
                labelFontColor: "#4F81BC",
                tickColor: "#4F81BC",
                maximum:18
            },
            axisY2: {
                title: "Maximum Scores",
                titleFontColor: "#C0504E",
                lineColor: "#C0504E",
                labelFontColor: "#C0504E",
                tickColor: "#C0504E",
                maximum:18
            },	
            height: 400,
            width:900,
            
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                legendText: "Actual Scores",
		        showInLegend: true, 
				dataPoints: [
					{ label: "Home Safety",  y: this.props.reportValues.InteriorHomeSafety },
					{ label: "Life Safety", y: this.props.reportValues.InteriorLifeSafety },
					{ label: "Injury Safety", y: this.props.reportValues.InteriorInjurySafety  },
					{ label: "Health Safety",  y: this.props.reportValues.InteriorHealthSafety  }
					
				]
			},
            {
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                axisYType: "secondary",
                legendText: "Maximum  Scores",
		        showInLegend: true, 
				dataPoints: [
					{ label: "Home Safety",  y: 15 },
					{ label: "Life Safety", y: 11 },
					{ label: "Injury Safety", y: 1  },
					{ label: "Health Safety",  y: 2  }
					
				]
			}
			]
        }
        
        return(
            <div className="pageContent">
                
		
                            
                {/* <h1>Interior Details</h1> */}
                <table >
                    <tr>
                        <th style={{width:300}}>Safety</th>
                        <th style={{width:150}}> Maximum  Scores</th>
                        <th style={{width:150}}>Maximum Percentages</th>
                        <th style={{width:150}}>Actual Scores</th>
                        <th style={{width:150}}>Actual Percentages</th>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Home Safety Report</td>
                        <td>15</td>
                        <td>51.72%</td>
                        <td>{reportValues.InteriorHomeSafety}</td>
                        <td>{this.InteriorHomeSafetyPercent}%</td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>11</td>
                        <td>37.93%</td>
                        <td>{reportValues.InteriorLifeSafety}</td>
                        <td>{this.InteriorLifeSafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>1</td>
                        <td>3.45%</td>
                        <td>{reportValues.InteriorInjurySafety}</td>
                        <td>{this.InteriorInjurySafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>2</td>
                        <td>6.90%</td>
                        <td>{reportValues.InteriorHealthSafety}</td>
                        <td>{this.InteriorHealthSafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>29</td>
                        <td style={{ border:"2px solid black"}}>100%</td>
                        <td style={{ border:"2px solid black"}}>{this.totalInterior}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalInteriorPercent}%</td>
                    </tr>
                </table>
                <br/><br/>
                <div>
			<CanvasJSChart options = {InteriorChart}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>


                <button class="ui left labeled icon button previous blue" onClick={this.previous}>
                    <i class="left arrow icon"></i>
                    Previous
                </button>

                {/* <button class="ui right labeled icon button next blue" onClick={this.continue} >
                        <i class="right arrow icon"></i>
                        Submit
                </button> */}
                                 
            </div>
        );
    }

}

export default InteriorChart