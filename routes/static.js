const express = require("express")
const {renderHomePageHandler} =require("../controllers/static")

const router = express.Router()

router.get("/", renderHomePageHandler)

module.exports = {
    staticRouter:router,
}