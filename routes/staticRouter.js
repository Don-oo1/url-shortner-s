const express = require('express')
const Url = require('../modules/url')


const router = express.Router()

router.get("/", async(req, res)=>{
    const allUrls = await Url.find({})
    const shortUrl = `${req.protocol}://${req.get('host')}/<ENTER_SHORTID>`

    return res.render("home",{
        urls:allUrls,
        shortUrl:shortUrl,
    })
})

module.exports = router
