// function handleFile(filePath) {
//     console.log("its Running!!");

//     // const filePath = "./ListFirstNations";
//     filePath = "./ListFirstNations.xlsx";

//     XLSX = require('xlsx');
//     Database = XLSX.readFile(filePath);
//     // var files = e.target.files, f = files[0];
//     // var reader = new FileReader();
//     // reader.onload = function(e) {
//     //   var data = new Uint8Array(e.target.result);
//     //   var workbook = XLSX.read(data, {type: 'array'});
  
//           // };
//     // reader.readAsArrayBuffer(f);
//   }


// // input_dom_element.addEventListener('change', handleFile, false);
// export default handleFile;

import React from 'react'
// import readXlsxFile from 'read-excel-file';
// import excel from 'xlsx';

// export class FNAddress {
//     constructor(Name, BandNum, Region, Address, City, Province, PostalCode) {
//       this.Name = Name;
//       this.BandNum = BandNum;
//       this.Region = Region;
//       this.Address = Address;
//       this.City = City;
//       this.Province = Province;
//       this.PostalCode = PostalCode;

//     }
// }

class FirstNationDB extends React.Component {

    constructor( props ){
      super( props );
      // this.handleClick = this.handleClick.bind(this);
      this.state = {
        DB: []
      }
  
      
    }
    
    // componentDidMount = () => {
     
    //   this.updateDB();
    //   this.props.getFirstNationData(this.state.DB);

    // }

    // updateDB = () => {
    //   var tempDB = [];
    //   tempDB.push( new FNAddress('Fort McKay First Nation', '467', 'AB',	'PO BOX 5360', 'FORT MCMURRAY', 'AB', 'T9H 3G4'));
    //   tempDB.push( new FNAddress('Fort McMurray #468 First Nation', '468', 'AB',	'PO BOX 6130, STN MAIN', 'FORT MCMURRAY', 'AB',	'T9H 4W1'));
    //   tempDB.push( new FNAddress('Frog Lake',	'465',	'AB', 'GENERAL DELIVERY', 'FROG LAKE', 'AB', 'T0A 1M0'));
    //   tempDB.push( new FNAddress('Heart Lake', '469',	'AB', 'PO BOX 447', 'LAC LA BICHE',	'AB','T0A 2C0'));
    //   tempDB.push( new FNAddress('Sturgeon Lake Cree Nation',	'455', 'AB', 'PO BOX 757',	'VALLEYVIEW', 'AB',	'T0H 3N0'));
    //   // console.log(tempDB)
    //   this.setState({DB:this.state.DB.concat(tempDB)});
      
    // }



    manageData = () => {

    }


    render(){
      return <h1>{this.state.DB.map((FNAdd) => (FNAdd.Province))}</h1>
    }

}
export default FirstNationDB;
