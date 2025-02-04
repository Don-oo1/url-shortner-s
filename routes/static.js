const express = require("express")




const router = express.Router()

router.get("/", (req,res)=>{
     res.render("index.ejs")
    res.end()
})
module.exports = {
    staticRouter:router,
}