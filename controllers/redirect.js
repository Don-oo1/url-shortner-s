const shortId = require("short-id")
const {Url} = require("../modeles/urls")

async function redirectHnadler(req,res){
    const shortId = req.params.shortId
    const url = await Url.findOne({shortId})
    res.redirect(url.redirectUrl)
}

module.exports = {
    redirectHnadler,
}