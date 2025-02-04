const express = require("express")
const shortId = require("short-id")
const {Url} = require("../modeles/urls")
const {redirectHnadler} = require("../controllers/redirect")

const router = express.Router()

router.get("/:shortId",redirectHnadler)

module.exports = {
    redirectRouter:router,
}