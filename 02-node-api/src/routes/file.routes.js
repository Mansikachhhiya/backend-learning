const express = require("express");
const { getAllFiles } = require("../controllers/file.controller");

const router = express.Router()

router.get("/", getAllFiles)

module.exports = router