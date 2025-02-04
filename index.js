const express = require("express")
const shortId = require("short-id")
const mongoose = require("mongoose")

const app = express()
const PORT = 8000

//db connections
const db = mongoose.connect("mongodb://127.0.0.1:27017/url-1").then(()=>{console.log("Db connected 🥳")})

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


//modelwares
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//routes
app.post("/url",async (req, res)=>{
    const redirectUrl = req.body.url
    const shortIdUrl = shortId.generate()
    await Url.create({
        redirectUrl,
        shortId:shortIdUrl,
    })
    res.json({shortId:shortIdUrl})
})

app.get("/:shortId",async(req,res)=>{
    const shortId = req.params.shortId
    const url = await Url.findOne({shortId})
    console.log(url.redirectUrl)
    res.redirect("https://www.google.es/")

})

app.listen(PORT, ()=>{console.log("server started 🚀")})