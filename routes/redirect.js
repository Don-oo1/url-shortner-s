const express = require("express")
const shortId = require("short-id")
const {Url} = require("../modeles/urls")



const router = express.Router()

router.get("/:shortId",async(req,res)=>{
    console.log("in redirect url")
    const shortId = req.params.shortId
    const url = await Url.findOne({shortId})

    res.redirect(url.redirectUrl)

})
module.exports = {
    redirectRouter:router,
}