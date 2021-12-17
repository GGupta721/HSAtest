import {Component} from "react";
import "./Report.css";
import "../InteriorDetails/InteriorDetails.js";
import {CanvasJSChart} from 'canvasjs-react-charts';
import { maxHeight } from "@mui/system";
// import { threadId } from "worker_threads";




class ExteriorChart extends Component {


  
    constructor(props) {
        super(props);
        this.previous=this.previous.bind(this);

        this.ExteriorHomeSafetyPercent=((this.props.reportValues.ExteriorHomeSafety/10)*100).toFixed(2);
        this.ExteriorLifeSafetyPercent=((this.props.reportValues.ExteriorLifeSafety/10)*100).toFixed(2);
        this.ExteriorInjurySafetyPercent=((this.props.reportValues.ExteriorInjurySafety/10)*100).toFixed(2);
        this.ExteriorHealthSafetyPercent=((this.props.reportValues.ExteriorHealthSafety/10)*100).toFixed(2);
        this.totalExterior=this.props.reportValues.ExteriorHomeSafety+this.props.reportValues.ExteriorInjurySafety+this.props.reportValues.ExteriorLifeSafety;
        this.totalExteriorPercent= ((this.totalExterior/10)*100).toFixed(2);

     
    }
    previous = (eve) => {
        eve.preventDefault();
        this.props.prevPage();
    }

    continue = async (eve) => {
        eve.preventDefault();
        this.props.nextPage();

    }




    render(){
        const{reportValues}=this.props;
        const ExteriorChart = {
            
			title: {
				text: ""
			},
            axisY: {
                title: "Actual Scores",
                titleFontColor: "#4F81BC",
                lineColor: "#4F81BC",
                labelFontColor: "#4F81BC",
                tickColor: "#4F81BC",
                maximum:10
                
            },
            axisY2: {
                title: "Maximum Scores",
                titleFontColor: "#C0504E",
                lineColor: "#C0504E",
                labelFontColor: "#C0504E",
                tickColor: "#C0504E",
                maximum:10
            },	
            height: 400,
            width:900,
            toolTip: {
                shared: true
            },
            legend: {
                cursor:"pointer",
            },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                legendText: "Actual Scores",
		        showInLegend: true, 
				dataPoints: [
					{ label: "Home Safety",  y: this.props.reportValues.ExteriorHomeSafety },
					{ label: "Life Safety", y: this.props.reportValues.ExteriorLifeSafety },
					{ label: "Injury Safety", y: this.props.reportValues.ExteriorInjurySafety  },
					{ label: "Health Safety",  y: this.props.reportValues.ExteriorHealthSafety  }
					
				]
			},
            {
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                axisYType: "secondary",
                legendText: "Maximum Scores",
		        showInLegend: true, 
				dataPoints: [
					{ label: "Home Safety",  y: 3 },
					{ label: "Life Safety", y: 2 },
					{ label: "Injury Safety", y: 5  },
					{ label: "Health Safety",  y: 0  }
					
				]
			}
			]
        }
        
       
        
        return(
            <div className="pageContent">
                {/* <h1>Exterior Details</h1>   */}
                <div>
            
                <table >
                    <tr>
                        <th style={{width:300}}>Safety</th>
                        <th style={{width:150}}> Maximum Scores</th>
                        <th style={{width:150}}>Maximum Percentage</th>
                        <th style={{width:150}}>Actual Scores</th>
                        <th style={{width:150}}>Actual Percentage</th>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Home Safety Report</td>
                        <td>3</td>
                        <td>30.00%</td>
                        <td>{reportValues.ExteriorHomeSafety}</td>
                        <td>{this.ExteriorHomeSafetyPercent}%</td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>2</td>
                        <td>20.00%</td>
                        <td>{reportValues.ExteriorLifeSafety}</td>
                        <td>{this.ExteriorLifeSafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>5</td>
                        <td>50.00%</td>
                        <td>{reportValues.ExteriorInjurySafety}</td>
                        <td>{this.ExteriorInjurySafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>0</td>
                        <td>0.00%</td>
                        <td>{reportValues.ExteriorHealthSafety}</td>
                        <td>{this.ExteriorHealthSafetyPercent}%</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>10</td>
                        <td style={{ border:"2px solid black"}}>100%</td>
                        <td style={{ border:"2px solid black"}}>{this.totalExterior}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalExteriorPercent}%</td>
                    </tr>
                </table> <br/><br/>
            
			<CanvasJSChart options = {ExteriorChart}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
                            
                
			

                <button class="ui left labeled icon button previous blue" onClick={this.previous}>
                    <i class="left arrow icon"></i>
                    Previous
                </button>

                <button class="ui right labeled icon button next blue" onClick={this.continue} >
                        <i class="right arrow icon"></i>
                        View Interior Report
                </button>
                                 
            </div>
        );
    }

}

export default ExteriorChart