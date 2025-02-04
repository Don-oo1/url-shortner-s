const mongoose = require("mongoose")

//db schema
const urlSchema = {
    redirectUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
        unique:true,
    }
}

//db model
const Url = mongoose.model("urls", urlSchema)

module.exports = {Url,}