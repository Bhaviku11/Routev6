const mongoose = require("mongoose")

const db_dev = "mongodb+srv://userex:iUh90TwXxDD2C2jL@cluster0.vlyn3cl.mongodb.net/routemaster_v6?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(db_dev)
let db = mongoose.connection

db.on('error', console.error.bind(console, "[[[Database connection error]]]"))
db.once('open',()=>{
    console.log("[[ Database Connected Successfully ]]")
})


module.exports = db