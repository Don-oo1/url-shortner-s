const shortId = require("short-id")
const {Url} = require("../modeles/urls")

async function generateShortIdHendler (req, res){
    const redirectUrl = req.body.url
    const shortIdUrl = shortId.generate()
    await Url.create({
        redirectUrl,
        shortId:shortIdUrl,
    })
    res.json({shortId:shortIdUrl})
}

module.exports = {
    generateShortIdHendler,
}