const express = require("express");
const app = express();
const healthRoutes = require("./routes/health.routes");
const fileRouters = require("./routes/file.routes")


// app.get("/", (req, res)=>{
//     res.send("Hello, World!");
// });

app.use("/health", healthRoutes);
app.use("/api/v1/files", fileRouters)
module.exports = app;