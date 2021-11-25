const fs = require('fs');
const csvParser = require('csv-parser');

const filename="./Comprehensivedata.csv"

var results =[];
fs.createReadStream(filename)
    .pipe(csvParser())
    .on('data',(data)=>results.push(data))
    .on('end',()=>{
        // console.log(results[0].City)
    })