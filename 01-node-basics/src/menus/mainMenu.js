const deleteFiles = require("../handlers/deleteFiles");
const openFile = require("../handlers/openFile");
const renameFile = require("../handlers/rename");
const { listFiles } = require("../services/fileServices");
const askQuestion = require("../utils/askQuestion");
const pause = require("../utils/pause");

async function showMenu(rl) {
  while (true) {
    console.log("\n============================");
    console.log("🚀 Welcome to NodeDrive");
    console.log("============================");

    console.log("1. Open/Create File");
    console.log("2. List Files");
    console.log("3. Delete File");
    console.log("4. Rename File");
    console.log("5. Exit");

    const option = await askQuestion(rl, "\nChoose Option : ");

    switch (option) {
      case "1":
        console.log("Open/Create File");
        await openFile(rl);
        await pause(rl);
        break;
      case "2":
        const files = listFiles();
        console.log("----------------");
        console.log("List Files");
        files.forEach((file, index) => {
          console.log(`${index + 1}. ${file}`);
        });
        console.log("----------------");
        await pause(rl);
        break;
      case "3":
        await deleteFiles(rl);
        break;
      case "4":
        await renameFile(rl);
        break;
      case "5":
        console.log("Exiting...");
        return;
      default:
        console.log("Invalid option, please choose 1-5");
        await pause(rl);
    }
  }
}

module.exports = showMenu;
