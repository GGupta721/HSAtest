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
        this.maxBuildingSafety=18;
        this.maxLifeSafety=3;
        this.maxInjurySafety=3;
        this.maxHealthSafety=1;
        this.total=this.maxBuildingSafety+this.maxHealthSafety+this.maxLifeSafety+this.maxInjurySafety;

        this.maxBuildingSafetyPercent=(18/this.total)*100;
        this.maxLifeSafetyPercent=(3/this.total)*100;
        this.maxInjurySafetyPercent=(3/this.total)*100;
        this.maxHealthSafetyPercent=(1/this.total)*100;
        this.totalPercent=100;
        this.state= 
        {
            ChartData:{
                labels: ['BuildingSafety','LifeSafety','InjurySafety','HealthSafety'],
                datesets:[{label:'Percentage',
                            data:[this.maxBuildingSafetyPercent,this.maxHealthSafetyPercent,this.maxInjurySafetyPercent,
                                   this.maxLifeSafetyPercent ],
                            backgroundcolor:['#e0f7fa','#e0f7fa','#e0f7fa','#e0f7fa']
            }]
            }
        }

        


     
    }

    
   


    render(){

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
                        <td>{this.maxBuildingSafety}</td>
                        <td>{this.maxBuildingSafetyPercent}%</td>
                        <td>{this.BuildingSafety}</td>
                        <td></td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>{this.maxLifeSafety}</td>
                        <td>{this.maxLifeSafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>{this.maxInjurySafety}</td>
                        <td>{this.maxInjurySafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>{this.maxHealthSafety}</td>
                        <td>{this.maxHealthSafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>{this.total}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalPercent}%</td>
                        <td style={{ border:"2px solid black"}}></td>
                        <td style={{ border:"2px solid black"}}></td>
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
                        <td>{this.maxBuildingSafetyPercent}%</td>
                        <td>{this.BuildingSafety}</td>
                        <td></td>
                    
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Life Safety Report</td>
                        <td>{this.maxLifeSafety}</td>
                        <td>{this.maxLifeSafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Injury Safety Report</td>
                        <td>{this.maxInjurySafety}</td>
                        <td>{this.maxInjurySafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightseagreen"}}>Health Safety Report</td>
                        <td>{this.maxHealthSafety}</td>
                        <td>{this.maxHealthSafetyPercent}%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{color:"lightslategrey", border:"2px solid black"}}>Total Assesment Score</td>
                        <td style={{ border:"2px solid black"}}>{this.total}</td>
                        <td style={{ border:"2px solid black"}}>{this.totalPercent}%</td>
                        <td style={{ border:"2px solid black"}}></td>
                        <td style={{ border:"2px solid black"}}></td>
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