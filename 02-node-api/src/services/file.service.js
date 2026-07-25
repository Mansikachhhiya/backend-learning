const fs = require("fs/promises");
const path = require("path");

const DATA_FOLDER = path.join(__dirname, "../data");
async function getAllFilesService(){
    const files = await fs.readdir(DATA_FOLDER);
    return files;
}


module.exports = {
    getAllFilesService
}