const mongoose = require("mongoose")

function connectMongoDb(url){
    const db = mongoose.connect(url)
    return db
}


module.exports = {connectMongoDb,}