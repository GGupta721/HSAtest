import React from 'react';
import "./Acknowledge.css";
import fileSaver, { saveAs } from 'file-saver';
// import { Link } from 'react-router-dom';
// import 
class DownloadLink {
    constructor(props){
        this.super(props);
        this.download=this.download.bind(this);
        this.downloadFile=this.downloadFile.bind(this);
    }
    render() {
        return (
            <form method="get" action={this.props.src}>
                <button type="submit">{this.props.children}</button>
            </form>
        );
    }
}
class Acknowledge extends React.Component{
     download=() =>{
        fileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "https://drive.google.com/file/d/143AqnokQX3ZibQAqtGDo96FIzdAl7u-I/view?usp=sharing",
            "HSAForm.pdf"
          );
     }

     downloadFile = (event) => {
         saveAs("https://drive.google.com/file/d/143AqnokQX3ZibQAqtGDo96FIzdAl7u-I/view?usp=sharing")
     }
   
    render(){
        const {handleAcknowledgeCheck} = this.props;
        return (
            <div className="flex-container">
                <div className="box1">
                    
                    <div className="flex-container2">
                        <div className="box3">
                       
                        
                            <h3 className="p2">Assessment Instructions</h3>
                            <div className="p3">
                                A Home Safety Assessment identifies potential safety and security issues. In completing this form, ensure that all fields are completed accurately. If the response to any question is ‘No’ or “Not Applicable (N/A)”, please include additional details in the comment box.<br/>
                            </div>
                        </div>
                        
                        <div>
                            <input type="checkbox" value="Acknowledged" className="inputV5" defaultChecked={handleAcknowledgeCheck.Acknowledgement === "Acknowledged"} onChange={handleAcknowledgeCheck}/>
                            I agree to Privacy Policy. &nbsp;
                            <a href="https://indigenousfiresafety.ca/nirs-privacy-policy/" target="_blank">Click to read <bdi className="redColor">*</bdi></a>
                        </div>
                                                
                    </div>

                </div>

                <div className="box1">
                    <div className="p1">
                        If you require assistance in completing this form, please call our office. An IFMS Program Delivery Specialist will be happy to assist you. For additional information, please email <a href = "mailto: programs@indigenousfiresafety.ca">programs@indigenousfiresafety.ca</a>
                        <br/><br/><p className="blueText fv2"><b>Need help? Call 1-888-444-6811</b></p>
                        <button className="pdfdownload" onClick={this.downloadFile}>Download HSA Form PDF format.</button>
                        {/* <a href="https://drive.google.com/file/d/143AqnokQX3ZibQAqtGDo96FIzdAl7u-I/view?usp=sharing" download> Click here to download PDF version.</a> */}
                        {/* <button  onClick={this.download}>
                            Download File
                        </button> */}
                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default Acknowledge
