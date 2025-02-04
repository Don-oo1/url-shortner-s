const express = require("express")
const {generateShortIdHendler} = require("../controllers/urls")



const router = express.Router()

router.post("/",generateShortIdHendler)

module.exports = {
    urlRouter:router,
}