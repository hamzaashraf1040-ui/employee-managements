const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./app")
dotenv.config()
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("mongodb connected")

app.listen(4030,()=>{
    console.log("localhost://4030")
})
})
.catch((error)=>{
console.log("database error connection",error);
})