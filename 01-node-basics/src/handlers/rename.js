
const { renameFile, fileExists } = require("../services/fileServices");
const askQuestion = require("../utils/askQuestion");
const pause = require("../utils/pause");

async function renameFileHandler(rl) {
	const oldName = await askQuestion(rl, "\nEnter Current Filename: ");

	if (!fileExists(oldName)) {
		console.log("\n❌ File Not Found");
		await pause(rl);
		return;
	}

	console.log("\n✅ File Found");
	const newName = await askQuestion(rl, "Enter New Filename: ");

	if (fileExists(newName)) {
		console.log("\n❌ A file with that name already exists");
		await pause(rl);
		return;
	}

	const confirm = await askQuestion(
		rl,
		`Rename ${oldName} -> ${newName}? (y/n) : `
	);

	if (confirm.toLowerCase() === "y") {
		renameFile(oldName, newName);
		console.log("\n✅ File Renamed");
	} else {
		console.log("\n❌ Rename Cancelled");
	}

	await pause(rl);
}

module.exports = renameFileHandler;