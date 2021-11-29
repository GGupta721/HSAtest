import {Component} from "react";
import "./Report.css";
import "../InteriorDetails/InteriorDetails.js";
//import { PieChart} from 'react-minimal-pie-chart';
//import Paper from '@material-ui/core/Paper';
//import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Legend,} from '@devexpress/dx-react-chart';
//import { withStyles } from '@material-ui/core/styles';
//import { Stack, Animation } from '@devexpress/dx-react-chart';
//import {Bar,Pie,Line} from 'react-chartjs-2';
//import { threadId } from "worker_threads";


// const legendStyles = () => ({
//     root: {
//       display: 'flex',
//       margin: 'auto',
//       flexDirection: 'row',
//     },
//   });
//   const legendRootBase = ({ classes, ...restProps }) => (
//     <Legend.Root {...restProps} className={classes.root} />
//   );
//   const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
//   const legendLabelStyles = () => ({
//     label: {
//       whiteSpace: 'nowrap',
//     },
//   });
//   const legendLabelBase = ({ classes, ...restProps }) => (
//     <Legend.Label className={classes.label} {...restProps} />
//   );
//   const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);


class Report extends Component {
    previous = (eve) => {
        eve.preventDefault();
        this.props.prevPage();
    }

    componentDidMount(){
        
    }

    constructor(props) {
        super(props);
        this.maxBuildingSafety=15;
        this.maxLifeSafety=4;
        this.maxInjurySafety=1;
        this.maxHealthSafety=1;
        this.total=this.maxBuildingSafety+this.maxHealthSafety+this.maxLifeSafety+this.maxInjurySafety;

        this.ExteriorBuildingSafetyPercent=((this.props.reportValues.ExteriorBuildingSafety/5)*100).toFixed(2);
        this.ExteriorLifeSafetyPercent=((this.props.reportValues.ExteriorLifeSafety/5)*100).toFixed(2);
        this.ExteriorInjurySafetyPercent=((this.props.reportValues.ExteriorInjurySafety/5)*100).toFixed(2);
        this.ExteriorHealthSafetyPercent=((this.props.reportValues.ExteriorHealthSafety/5)*100).toFixed(2);
        this.totalExterior=this.props.reportValues.ExteriorBuildingSafety+this.props.reportValues.ExteriorInjurySafety;
        this.totalExteriorPercent= ((this.totalExterior/5)*100).toFixed(2);

        this.InteriorBuildingSafetyPercent=((this.props.reportValues.InteriorBuildingSafety/21)*100).toFixed(2);
        this.InteriorLifeSafetyPercent=((this.props.reportValues.InteriorLifeSafety/21)*100).toFixed(2);
        this.InteriorInjurySafetyPercent=((this.props.reportValues.InteriorInjurySafety/21)*100).toFixed(2);
        this.InteriorHealthSafetyPercent=((this.props.reportValues.InteriorHealthSafety/21)*100).toFixed(2);
        this.totalInterior=this.props.reportValues.InteriorBuildingSafety+this.props.reportValues.InteriorInjurySafety+ this.props.reportValues.InteriorHealthSafety+this.props.reportValues.InteriorLifeSafety;
        this.totalInteriorPercent= ((this.totalInterior/21)*100).toFixed(2);

        


     
    }

    
   


    render(){
        const{reportValues}=this.props;
        return(
            <div className="pageContent">
                <h1>Exterior Details</h1>
                <table >
                    <tr>
                        <th style={{width:300}}>Safety</th>
                        <th style={{width:150}}> Maximum Number Of Findings</th>
                        <th style={{width:150}}>Maximum Percentage of Findings</th>
                        <th style={{width:150}}>Actual Number Of Findings</th>
                        <th style={{width:150}}>Actual Percentage of Findings</th>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Building Safety Report</td>
                        <td>3</td>
                        <td>60%</td>
                        <td>{reportValues.ExteriorBuildingSafety}</td>
                        <td>{this.ExteriorBuildingSafetyPercent}</td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>0</td>
                        <td>0%</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>2</td>
                        <td>40%</td>
                        <td>{reportValues.ExteriorInjurySafety}</td>
                        <td>{this.ExteriorInjurySafetyPercent}</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>0</td>
                        <td>0%</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>5</td>
                        <td style={{ border:"2px solid black"}}>100%</td>
                        <td style={{ border:"2px solid black"}}>{this.totalExterior}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalExteriorPercent}</td>
                    </tr>
                </table>
                {/* <Bar
                    data={this.state.ChartData}
                    options={{
                        maintainAspectRatio:false 
                    }}

                
                
                /> */}
{/* 
                            <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Year', 'Sales', 'Expenses', 'Profit'],
                ['2014', 1000, 400, 200],
                ['2015', 1170, 460, 250],
                ['2016', 660, 1120, 300],
                ['2017', 1030, 540, 350],
            ]}
            options={{
                // Material design options
                chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            /> */}
                <h1>Interior Details</h1>
                <table >
                    <tr>
                        <th style={{width:300}}>Safety</th>
                        <th style={{width:150}}> Maximum Number Of Findings</th>
                        <th style={{width:150}}>Maximum Percentage of Findings</th>
                        <th style={{width:150}}>Actual Number Of Findings</th>
                        <th style={{width:150}}>Actual Percentage of Findings</th>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Building Safety Report</td>
                        <td>{this.maxBuildingSafety}</td>
                        <td>71.43%</td>
                        <td>{reportValues.InteriorBuildingSafety}</td>
                        <td>{this.InteriorBuildingSafetyPercent}</td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>{this.maxLifeSafety}</td>
                        <td>19.05%</td>
                        <td>{reportValues.InteriorLifeSafety}</td>
                        <td>{this.InteriorLifeSafetyPercent}</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>{this.maxInjurySafety}</td>
                        <td>4.76%</td>
                        <td>{reportValues.InteriorInjurySafety}</td>
                        <td>{this.InteriorInjurySafetyPercent}</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>{this.maxHealthSafety}</td>
                        <td>4.76%</td>
                        <td>{reportValues.InteriorHealthSafety}</td>
                        <td>{this.InteriorHealthSafetyPercent}</td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>{this.total}</td>
                        <td style={{ border:"2px solid black"}}>100%</td>
                        <td style={{ border:"2px solid black"}}>{this.totalInterior}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalInteriorPercent}</td>
                    </tr>
                </table>
                <br/>

                {/* <Paper>
        <Chart
           data={this.maxBuildingSafetyPercent,this.maxHealthSafetyPercent,this.maxInjurySafetyPercent,this.maxLifeSafetyPercent}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Gold Medals"
            valueField="gold"
            argumentField="country"
            color="#ffd700"
          />
          <BarSeries
            name="Silver Medals"
            valueField="silver"
            argumentField="country"
            color="#c0c0c0"
          />
          <BarSeries
            name="Bronze Medals"
            valueField="bronze"
            argumentField="country"
            color="#cd7f32"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Olimpic Medals in 2008" />
          <Stack />
        </Chart>
      </Paper> */}
                {/* <PieChart
                    data={[
                        { title: 'One', value: this.maxBuildingSafetyPercent, color: '#E38627' },
                        { title: 'Two', value: this.maxHealthSafetyPercent, color: '#C13C37' },
                        { title: 'Three', value: this.maxInjurySafetyPercent, color: '#6A2135' },
                        { title: 'Four', value: this.maxLifeSafetyPercent, color: '#00bcd4' },
                    ]}
                    />; */}
                <button class="ui left labeled icon button previous blue" onClick={this.previous}>
                    <i class="left arrow icon"></i>
                    Previous
                </button>
                                 
            </div>
        );
    }

}

export default Report