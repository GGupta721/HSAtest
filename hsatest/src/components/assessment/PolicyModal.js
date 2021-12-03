import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// function Example() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Personal Information Privacy Policy 
//             Effective Date: August 14, 2020 
//             1.0 Purpose 
//             1.1 The purpose of this policy is to establish principles and guidance for managing Personal Information in the Custody or under the Control of the Aboriginal Firefighters Association of Canada (AFAC). 
//             2.0 Scope 
//             2.1 This policy applies to AFAC Workers and Directors. 
  
//             2.2 This policy applies to any Personal Information in the Custody or under the Control of AFAC regardless of format or medium. 
            
//             3.0 Policy Statements 
            
//             General 
            
//             3.1 AFAC and its Workers must comply with the Personal Information Protection Act, and any applicable professional codes of ethics and standards of practice. 
            
//             3.2 AFAC will demonstrate accountability and responsibility for managing Personal Information in its Custody or under its Control in order to maintain trust-based relationships with Indigenous communities and people, funders, and the public. 
            
//             3.3 AFAC will be transparent regarding the management of Personal Information, including providing public and accessible information regarding this Policy. 
            
//             3.4 As related to data and information that is not Personal Information, AFAC will maintain data governance and research practices for non-identifiable information that fulfill the OCAP® Principles and the data governance policies and protocols of Indigenous communities and representative organizations. 
            
//             Consent for Collection, Use, and Disclosure of Personal Information 
            
//             3.5 Workers must not collect, use, or disclose Personal Information unless: 
            
//             the individual gives consent to the collection, use, or disclosure; 
            
//             the law authorizes the collection, use, or disclosure without consent; or, 
            
//             the law deems the collection, use or disclosure to be consented to. 
            
//             3.6 When required by law, Workers must give individuals sufficient information about the specific purposes for collection, use, and disclosure of their Personal Information, so they can make an informed decision regarding consent. This information must be provided before or at the time of collection, use or disclosure. 
            
//             3.7 Consent can be accepted in writing, by the individual or through an authorized representative. 
            
//             3.8 Workers must respect an individual’s right to withdraw consent at any time, subject to any legal agreement or other restrictions. Workers will inform individuals of any implications of such a withdrawal, so they can make an informed decision. 
            
//             3.9 Workers may collect, use, and disclose Personal Information without the individual’s consent only in limited and specific circumstances, including but not limited to: 
            
//             when the collection, use or disclosure of personal information is permitted or required by law; 
            
//             in an emergency that threatens an individual’s life, health, or personal security; or, 
            
//             when the personal information is available from a public source. 
            
//             3.10 Workers may collect, use, and disclose Personal Information from, or on behalf of, another organization without consent if: 
            
//             the individual previously consented to the collection and use of the Personal Information by the other organization; and, 
            
//             the Personal Information is used, disclosed to, or collected by AFAC solely for the purposes for which the information was previously collected.   
            
//             Collection, Use, Disclosure, and Retention of Personal Information 
            
//             3.11 Workers must not collect, use, and disclose any person’s Personal Information unless such collection, use or disclosure is necessary for that Worker to conduct AFAC business, programs, services, or activities, and must not collect more Personal Information than required to fulfill those purposes. The business, programs, services or activities include, but are not limited to: 
            
//             providing Indigenous communities and families with fire safety programs and services; 
            
//             conducting training related to fire safety; 
            
//             data collection, research and evaluation to identify preferences and needs, and inform the quality and development of fire safety for Indigenous people and communities; 
            
//             establishing, managing, and terminating an employment relationship. 
            
//             3.12 Workers must collect, use, and disclose only the type and amount of employee Personal Information that is reasonably required to establish, manage, or terminate an employment relationship between the AFAC and the individual. 
            
//             3.13 Workers must not collect, use, and disclose Personal Information for purposes other than those for which it was originally collected, used, or disclosed, except with the consent of the individual or as required by law. 
            
//             3.14 Workers will make reasonable efforts to ensure that the Personal information AFAC collects, uses or discloses is as accurate and complete as reasonably possible at the time of collection, use or disclosure. 
            
//             3.15 Upon request by an individual for the correction of inaccurate or incomplete Personal Information about them, the AFAC will ensure the correction is made. 
            
//             3.16 If Workers use an individual’s Personal Information to make a decision that directly affects the individual, that Personal Information must be retained for at least one year following the decision, to provide the individual a reasonable opportunity to request access to it. 
            
//             3.17 AFAC will retain Personal Information only as long as necessary to fulfill the identified or allowable purposes, and will destroy Personal Information as soon as it is reasonable to assume that the purpose for which it was collected is no longer relevant, or retention is no longer necessary for legal or business purposes. 
            
//             3.18 Personal Information will not be destroyed if an individual has made a request to access that Personal Information. 
            
//              Access to Personal Information 
            
//             3.19 AFAC will make a reasonable effort to assist individuals who request access to their Personal Information and to respond to each applicant as accurately and completely as possible, subject to limited exceptions such as solicitor-client privilege, or that providing access does not negatively impact others. 
            
//             3.20 AFAC will not charge fees to process access to Personal Information requests from AFAC employees. 
            
//             3.21 Workers will not charge fees to Indigenous applicants requesting access to their Personal Information. 
            
//             3.22 Workers may charge non-Indigenous applicants a fee commensurate to the cost of processing the request to access their Personal Information (other than employee Personal Information), and will provide the applicant a written estimate of the fee before providing the service. 
            
//             3.23 Workers must make the requested information available within 30 business days, or provide written notice of an extension where additional time is required to fulfill the request. 
            
//             3.24 If a request is refused in full or in part, Workers will notify the requestor in writing, providing the reasons for refusal and their right to ask, within 30 days, for a review by the Information and Privacy Commissioner. 
            
//             Privacy and Information Security 
            
//             3.25 Workers will implement the following security measures to ensure that Personal Information is appropriately protected from unauthorized access, collection, use, disclosure, copying, modification or disposal or similar risks: the use of locked filing cabinets; physically securing offices where Personal Information is held; the use of user IDs, passwords, encryption, firewalls; and, restricting employee and service provider access to Personal Information on a need to know basis. 
            
//             3.26 When developing any new program or activity involving Personal Information, AFAC will conduct an assessment to ensure that safeguards for Personal Information as described in this Policy are met. 
            
//             3.27 AFAC will use appropriate security measures when destroying Personal Information. 
            
//             3.28 AFAC will continually review and update its privacy and information security controls as technology changes to ensure ongoing protection of Personal Information. 
            
//             3.29 Workers will complete mandatory privacy and information security training. 
            
//             3.30 Following any future amendments to this Policy, any consent forms, confidentiality agreement templates, and funding agreement templates will be reviewed and amended as necessary. 
            
//             3.31 Workers will identify and contain actual or suspected Privacy Breaches (e.g. lost or stolen device that may contain Personal Information, completed consent forms sent to the wrong address). 
            
//             3.32 Workers will report actual or suspected Privacy Breaches to the Privacy Officer. 
            
//             3.33 The Privacy Officer will investigate Privacy Breaches and report the outcomes of this investigation to the Executive Director. 
            
//             3.34 The AFAC Executive Director will report significant Privacy Breaches to the AFAC Board of Directors, which could include breaches involving a large volume of information, and/or many individuals’ information, and notify the Information and Privacy Commissioner and affected individuals when legally required and/or if substantial risks are identified. 
            
//             Complaints 
            
//             3.35 Individuals, including Workers, who are concerned about AFAC’s compliance with this Policy or any privacy legislation should direct any complaints, concerns or questions in writing to the Privacy Officer. 
            
//             3.36 AFAC will provide information on its website regarding the process and contact information to lodge a complaint with the Privacy Officer regarding AFAC’s compliance with this Policy or any relevant privacy legislation. 
            
//             3.37 Workers who receive complaints about AFAC’s handling of Personal Information will direct those complaints to the Privacy Officer. 
            
//             3.38 The Privacy Officer will acknowledge, catalogue, and investigate all complaints. 
            
//             3.39 If the Privacy Officer determines that a complaint is valid, the Privacy Officer will create a written response outlining the measures AFAC will take in response to the complaint. Upon approval by the Executive Director, this written response will be sent to the complainant. 
            
//             3.40 If the Privacy Officer is unable to resolve the concern, the Privacy Officer will inform the complainant that they are entitled to write to the Information and Privacy Commissioner. 
            
//             Compliance 
            
//             3.41 Any violations of this policy may result in disciplinary action. 
            
//             Exceptions 
            
//             3.42 Exceptions to this Policy require approval by the AFAC Executive Director. 
            
//             Delegation 
            
//             3.43 This Policy may be further defined and elaborated upon through procedures approved by the Executive Director.  
            
//             4.0 Responsibilities 
            
//             4.1 Aboriginal Firefighters Association of Canada (AFAC): approve and comply with this Policy; approve any exceptions to this Policy. 
            
//             4.2 Executive Director: provide overall leadership to the oversight and management of Personal Information; appoint the Privacy Officer; approve sharing written responses to complaints with the complainant; approve any procedures developed pursuant to this Policy. 
            
//             4.3 Privacy Officer: provide advice and solutions to ensure AFAC’s management of Personal Information complies with this Policy and applicable legislation; respond to and investigate inquiries and complaints; report significant privacy breaches to the Executive Director. 
            
//             4.4 Workers: manage Personal Information in accordance with this Policy. 
            
//             5.0 Definitions 
            
//             Control: having the authority and responsibility to decide what other parties do with Information or Data under their Custody, even though that Information or Data is not necessarily owned or possessed by AFAC. 
            
//             Custody: having physical possession and Control of information or data, including Personal Information, but not necessarily ownership. 
            
//             Personal Information: information that can identify an individual (whether alone or in combination with other information) or that is about an identifiable individual. In accordance with the Personal Information Protection Act, Personal Information does not include business contact information or information regarding work products. 
            
//             Privacy Breach(es): the loss of, unauthorized access to, or unauthorized disclosure of Personal Information resulting from a breach of an organization’s security safeguards. 
            
//             Privacy Officer: the individual designated responsibility for ensuring that AFAC complies with this Policy. 
            
//             Worker: individuals employed or contracted with AFAC while engaged in AFAC work activities, specifically: employees (permanent, term, casual, full-time, part-time); people working at AFAC on a secondment or interchange agreement; temporary workers paid via third-party employment agencies; employees of organizations/service providers contracted by AFAC; contractors; consultants, students; and, volunteers. 
            
//             6.0 Related Documents 
            
//             Mandatory Compliance Documents 
            
//             Personal Information Protection Act (British Columbia) 
            
//             Other AFAC Policy Documents 
            
//             None 
            
//             7.0 Rescind and Interpretation Statements 
            
//             7.1 With the approval of this policy, older versions are considered to be replaced and/or rescinded and are no longer in effect. 
            
//             7.2 Where interpretation is required regarding this policy or the relationship between AFAC policies, the AFAC has sole discretion to provide the interpretation. 
            
//             8.0 Attachments 
            
//             None 
  
   
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   export default Example;
// //   render(<Example />);


function PolicyModal() {
    return (
      <div>
          <h4>Centered Modal</h4>
            Personal Information Privacy Policy
            Effective Date: August 14, 2020 
             1.0 Purpose 
             1.1 The purpose of this policy is to establish principles and guidance for managing Personal Information in the Custody or under the Control of the Aboriginal Firefighters Association of Canada (AFAC). 
             2.0 Scope 
             2.1 This policy applies to AFAC Workers and Directors. 
 
             2.2 This policy applies to any Personal Information in the Custody or under the Control of AFAC regardless of format or medium. 
            
             3.0 Policy Statements 
            
             General 
            
             3.1 AFAC and its Workers must comply with the Personal Information Protection Act, and any applicable professional codes of ethics and standards of practice. 
            
             3.2 AFAC will demonstrate accountability and responsibility for managing Personal Information in its Custody or under its Control in order to maintain trust-based relationships with Indigenous communities and people, funders, and the public. 
            
             3.3 AFAC will be transparent regarding the management of Personal Information, including providing public and accessible information regarding this Policy. 
            
             3.4 As related to data and information that is not Personal Information, AFAC will maintain data governance and research practices for non-identifiable information that fulfill the OCAP® Principles and the data governance policies and protocols of Indigenous communities and representative organizations. 
            
             Consent for Collection, Use, and Disclosure of Personal Information 
            
             3.5 Workers must not collect, use, or disclose Personal Information unless: 
            
             the individual gives consent to the collection, use, or disclosure; 
            
             the law authorizes the collection, use, or disclosure without consent; or, 
            
             the law deems the collection, use or disclosure to be consented to. 
            
             3.6 When required by law, Workers must give individuals sufficient information about the specific purposes for collection, use, and disclosure of their Personal Information, so they can make an informed decision regarding consent. This information must be provided before or at the time of collection, use or disclosure. 
            
             3.7 Consent can be accepted in writing, by the individual or through an authorized representative. 
            
             3.8 Workers must respect an individual’s right to withdraw consent at any time, subject to any legal agreement or other restrictions. Workers will inform individuals of any implications of such a withdrawal, so they can make an informed decision. 
            
             3.9 Workers may collect, use, and disclose Personal Information without the individual’s consent only in limited and specific circumstances, including but not limited to: 
            
             when the collection, use or disclosure of personal information is permitted or required by law; 
            
             in an emergency that threatens an individual’s life, health, or personal security; or, 
            
             when the personal information is available from a public source. 
            
             3.10 Workers may collect, use, and disclose Personal Information from, or on behalf of, another organization without consent if: 
            
             the individual previously consented to the collection and use of the Personal Information by the other organization; and, 
            
             the Personal Information is used, disclosed to, or collected by AFAC solely for the purposes for which the information was previously collected.   
            
             Collection, Use, Disclosure, and Retention of Personal Information 
            
             3.11 Workers must not collect, use, and disclose any person’s Personal Information unless such collection, use or disclosure is necessary for that Worker to conduct AFAC business, programs, services, or activities, and must not collect more Personal Information than required to fulfill those purposes. The business, programs, services or activities include, but are not limited to: 
            
             providing Indigenous communities and families with fire safety programs and services; 
            
             conducting training related to fire safety; 
            
             data collection, research and evaluation to identify preferences and needs, and inform the quality and development of fire safety for Indigenous people and communities; 
            
             establishing, managing, and terminating an employment relationship. 
            
             3.12 Workers must collect, use, and disclose only the type and amount of employee Personal Information that is reasonably required to establish, manage, or terminate an employment relationship between the AFAC and the individual. 
            
             3.13 Workers must not collect, use, and disclose Personal Information for purposes other than those for which it was originally collected, used, or disclosed, except with the consent of the individual or as required by law. 
            
             3.14 Workers will make reasonable efforts to ensure that the Personal information AFAC collects, uses or discloses is as accurate and complete as reasonably possible at the time of collection, use or disclosure. 
            
             3.15 Upon request by an individual for the correction of inaccurate or incomplete Personal Information about them, the AFAC will ensure the correction is made. 
            
             3.16 If Workers use an individual’s Personal Information to make a decision that directly affects the individual, that Personal Information must be retained for at least one year following the decision, to provide the individual a reasonable opportunity to request access to it. 
            
             3.17 AFAC will retain Personal Information only as long as necessary to fulfill the identified or allowable purposes, and will destroy Personal Information as soon as it is reasonable to assume that the purpose for which it was collected is no longer relevant, or retention is no longer necessary for legal or business purposes. 
            
             3.18 Personal Information will not be destroyed if an individual has made a request to access that Personal Information. 
            
              Access to Personal Information 
            
             3.19 AFAC will make a reasonable effort to assist individuals who request access to their Personal Information and to respond to each applicant as accurately and completely as possible, subject to limited exceptions such as solicitor-client privilege, or that providing access does not negatively impact others. 
            
             3.20 AFAC will not charge fees to process access to Personal Information requests from AFAC employees. 
            
             3.21 Workers will not charge fees to Indigenous applicants requesting access to their Personal Information. 
            
             3.22 Workers may charge non-Indigenous applicants a fee commensurate to the cost of processing the request to access their Personal Information (other than employee Personal Information), and will provide the applicant a written estimate of the fee before providing the service. 
            
             3.23 Workers must make the requested information available within 30 business days, or provide written notice of an extension where additional time is required to fulfill the request. 
            
             3.24 If a request is refused in full or in part, Workers will notify the requestor in writing, providing the reasons for refusal and their right to ask, within 30 days, for a review by the Information and Privacy Commissioner. 
            
             Privacy and Information Security 
            
             3.25 Workers will implement the following security measures to ensure that Personal Information is appropriately protected from unauthorized access, collection, use, disclosure, copying, modification or disposal or similar risks: the use of locked filing cabinets; physically securing offices where Personal Information is held; the use of user IDs, passwords, encryption, firewalls; and, restricting employee and service provider access to Personal Information on a need to know basis. 
            
             3.26 When developing any new program or activity involving Personal Information, AFAC will conduct an assessment to ensure that safeguards for Personal Information as described in this Policy are met. 
            
             3.27 AFAC will use appropriate security measures when destroying Personal Information. 
            
             3.28 AFAC will continually review and update its privacy and information security controls as technology changes to ensure ongoing protection of Personal Information. 
            
             3.29 Workers will complete mandatory privacy and information security training. 
            
             3.30 Following any future amendments to this Policy, any consent forms, confidentiality agreement templates, and funding agreement templates will be reviewed and amended as necessary. 
            
             3.31 Workers will identify and contain actual or suspected Privacy Breaches (e.g. lost or stolen device that may contain Personal Information, completed consent forms sent to the wrong address). 
            
             3.32 Workers will report actual or suspected Privacy Breaches to the Privacy Officer. 
            
             3.33 The Privacy Officer will investigate Privacy Breaches and report the outcomes of this investigation to the Executive Director. 
            
             3.34 The AFAC Executive Director will report significant Privacy Breaches to the AFAC Board of Directors, which could include breaches involving a large volume of information, and/or many individuals’ information, and notify the Information and Privacy Commissioner and affected individuals when legally required and/or if substantial risks are identified. 
            
             Complaints 
            
             3.35 Individuals, including Workers, who are concerned about AFAC’s compliance with this Policy or any privacy legislation should direct any complaints, concerns or questions in writing to the Privacy Officer. 
            
             3.36 AFAC will provide information on its website regarding the process and contact information to lodge a complaint with the Privacy Officer regarding AFAC’s compliance with this Policy or any relevant privacy legislation. 
            
             3.37 Workers who receive complaints about AFAC’s handling of Personal Information will direct those complaints to the Privacy Officer. 
            
             3.38 The Privacy Officer will acknowledge, catalogue, and investigate all complaints. 
            
             3.39 If the Privacy Officer determines that a complaint is valid, the Privacy Officer will create a written response outlining the measures AFAC will take in response to the complaint. Upon approval by the Executive Director, this written response will be sent to the complainant. 
            
             3.40 If the Privacy Officer is unable to resolve the concern, the Privacy Officer will inform the complainant that they are entitled to write to the Information and Privacy Commissioner. 
            
             Compliance 
            
             3.41 Any violations of this policy may result in disciplinary action. 
            
             Exceptions 
            
             3.42 Exceptions to this Policy require approval by the AFAC Executive Director. 
            
             Delegation 
            
             3.43 This Policy may be further defined and elaborated upon through procedures approved by the Executive Director.  
            
             4.0 Responsibilities 
            
             4.1 Aboriginal Firefighters Association of Canada (AFAC): approve and comply with this Policy; approve any exceptions to this Policy. 
            
             4.2 Executive Director: provide overall leadership to the oversight and management of Personal Information; appoint the Privacy Officer; approve sharing written responses to complaints with the complainant; approve any procedures developed pursuant to this Policy. 
            
             4.3 Privacy Officer: provide advice and solutions to ensure AFAC’s management of Personal Information complies with this Policy and applicable legislation; respond to and investigate inquiries and complaints; report significant privacy breaches to the Executive Director. 
            
             4.4 Workers: manage Personal Information in accordance with this Policy. 
            
             5.0 Definitions 
            
             Control: having the authority and responsibility to decide what other parties do with Information or Data under their Custody, even though that Information or Data is not necessarily owned or possessed by AFAC. 
            
             Custody: having physical possession and Control of information or data, including Personal Information, but not necessarily ownership. 
           
             Personal Information: information that can identify an individual (whether alone or in combination with other information) or that is about an identifiable individual. In accordance with the Personal Information Protection Act, Personal Information does not include business contact information or information regarding work products. 
           
             Privacy Breach(es): the loss of, unauthorized access to, or unauthorized disclosure of Personal Information resulting from a breach of an organization’s security safeguards. 
            
             Privacy Officer: the individual designated responsibility for ensuring that AFAC complies with this Policy. 
            
             Worker: individuals employed or contracted with AFAC while engaged in AFAC work activities, specifically: employees (permanent, term, casual, full-time, part-time); people working at AFAC on a secondment or interchange agreement; temporary workers paid via third-party employment agencies; employees of organizations/service providers contracted by AFAC; contractors; consultants, students; and, volunteers. 
            
             6.0 Related Documents 
            
             Mandatory Compliance Documents 
            
             Personal Information Protection Act (British Columbia) 
            
             Other AFAC Policy Documents 
            
             None 
            
             7.0 Rescind and Interpretation Statements 
            
             7.1 With the approval of this policy, older versions are considered to be replaced and/or rescinded and are no longer in effect. 
            
             7.2 Where interpretation is required regarding this policy or the relationship between AFAC policies, the AFAC has sole discretion to provide the interpretation. 
           
             8.0 Attachments 
            
             None 
          </div>
    );
  }

  export default PolicyModal;
  
//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <>
        // <Button variant="primary" onClick={() => setModalShow(true)}>
        //   Launch vertically centered modal
        // </Button>
  
        // <MyVerticallyCenteredModal
        //   show={modalShow}
        //   onHide={() => setModalShow(false)}
        // />
//       </>
//     );
//   }
  
//   render(<App />);