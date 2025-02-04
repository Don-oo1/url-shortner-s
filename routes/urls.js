const express = require("express")
const shortId = require("short-id")
const {Url} = require("../modeles/urls")



const router = express.Router()

router.post("/",async (req, res)=>{
    const redirectUrl = req.body.url
    const shortIdUrl = shortId.generate()
    await Url.create({
        redirectUrl,
        shortId:shortIdUrl,
    })
    res.json({shortId:shortIdUrl})
})

module.exports = {
    urlRouter:router,
}