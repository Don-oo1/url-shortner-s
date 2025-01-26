const express = require('express')
const {handleCreateShortId,
    handleAnalytics
} = require('../controllers/url')

const router = express.Router()

router.post("/",handleCreateShortId)
router.get("/analytics/:shortId", handleAnalytics)

module.exports = router