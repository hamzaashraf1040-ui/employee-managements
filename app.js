const express = require("express")
const app= express()
const empRoute = require("./routes/epmroutes")

app.use(express.json());
app.use("/api/employee", empRoute);

module.exports = app;


