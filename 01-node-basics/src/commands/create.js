const createFile = require("../services/fileServices");

function create (filename){

    console.log("creating...", filename);
    createFile(filename)
    
}

module.exports = create