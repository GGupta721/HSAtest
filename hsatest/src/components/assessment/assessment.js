import React from "react";
import "./assessment.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Example from "./PolicyModal"
import PolicyModal from "./PolicyModal";
import Router from "../Router";
import NavigationLink from "../NavigationLink";


function Assessment () {

    const [modalShow, setModalShow] = React.useState(false);    
    
    return(
        <div className="assessment-div">
            <h1>Home Safety Assessment</h1>
            {/* <div>
                A Home Safety Assessment identifies potential safety and security issues. In completing this form, ensure that all fields are completed accurately. If the response to any question is ‘No’ or “Not Applicable (N/A)”, please include additional details in the comment box.<br/>
                <p className="blueText fv2"><b>Need help? Call 1-888-444-6811</b></p>
                If you require assistance in completing this form, please call our office. An IFMS Program Delivery Specialist will be happy to assist you. For additional information, please email programs@indigenousfiresafety.ca
            </div> */}
            
                   
        </div>
    );
    
}

export default Assessment;