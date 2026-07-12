const { fileExists, readFile, appendToFile, createFile } = require("../services/fileServices");
const askQuestion = require("../utils/askQuestion");

async function openFile(rl) {
  const filename = await askQuestion(rl, "\nEnter Filename: ");

  if (fileExists(filename)) {
    console.log("\n✅ File Found");
    const data = readFile(filename);
    console.log("-----------------------");
    console.log(data);
    console.log("-----------------------");
    const answer = await askQuestion(rl, "\nAppend new content? (y/n) : ");
    if (answer.toLowerCase() === "y") {
      const content = await askQuestion(rl, "Enter Content : ");
      appendToFile(filename, content);
      console.log("\n✅ Content Saved");
    } else {
    }
  } else {
    console.log("\n❌ File Not Found");
    const answer = await askQuestion(rl, "Create New File? (y/n) : ");
    if (answer.toLowerCase() !== "y") {
      return;
    }
    const content = await askQuestion(rl, "Enter Content : ");

    createFile(filename, content);

    console.log("\n✅ File Created");
  }
}

module.exports = openFile;