const { listFiles } = require("../services/fileServices");
const pause = require("../utils/pause");

async function listAllFiles(rl) {
  const files = listFiles();
  console.log("----------------");
  if (files.length) {
    console.log("List Files");
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  }else{
     console.log("No files found.");
  }
  console.log("----------------");
  await pause(rl)
}

module.exports = listAllFiles;
