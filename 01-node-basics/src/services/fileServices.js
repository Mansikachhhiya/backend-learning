const path = require("path");
const fs = require("fs");

function getFilePath(filename) {
  const filePath = path.join(__dirname, "../data", `${filename}.txt`);
  return filePath;
}

function getDataFolder() {
  return path.join(__dirname, "../data");
}

function fileExists(filename) {
  const filePath = getFilePath(filename);
  return fs.existsSync(filePath);
}

function createFile(filename, content = "") {
  return fs.writeFileSync(getFilePath(filename), content);
}

function readFile(filename) {
  return fs.readFileSync(getFilePath(filename), "utf-8");
}

function appendToFile(filename, content) {
  return fs.appendFileSync(getFilePath(filename), content);
}

function listFiles() {
  return fs.readdirSync(getDataFolder());
}

function deleteFile(filename){
    fs.unlinkSync(getFilePath(filename))
}

function renameFile(oldFilename, newFilename){
    fs.renameSync(getFilePath(oldFilename), getFilePath(newFilename))
}

module.exports = {
  createFile,
  getFilePath,
  fileExists,
  readFile,
  appendToFile,
  getDataFolder,
  listFiles,
  deleteFile,
  renameFile
};
