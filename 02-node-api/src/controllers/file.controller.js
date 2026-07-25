const { getAllFilesService } = require("../services/file.service");

async function getAllFiles(req, res) {
    const files = await getAllFilesService();

    return res.status(200).json({
        success: true,
        message: "Files Fetched successfully",
        data: files
    })
}

module.exports ={getAllFiles}