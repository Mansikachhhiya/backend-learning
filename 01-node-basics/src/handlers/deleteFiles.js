const { deleteFile, fileExists } = require("../services/fileServices");
const askQuestion = require("../utils/askQuestion");
const pause = require("../utils/pause");

async function deleteFiles(rl) {
 const filename = await askQuestion(rl, "\nEnter Filename: ");

 if(fileExists(filename)){
    console.log("\n✅ File Found");
     const answer = await askQuestion(rl, "\nAre you sure? (y/n) : ");
     if(answer.toLowerCase()==="y"){
        deleteFile(filename);
        console.log("\n✅ File Deleted");
     }else{
        console.log("\n❌ Delete Cancelled");
     }
 }else {
    console.log("\n❌ File Not Found");
 }
await pause(rl)
}

module.exports = deleteFiles;