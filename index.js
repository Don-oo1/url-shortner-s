const express = require('express')
const {connectMongoDb} = require('./connections')
const {handleRedirectToUrl} = require('./controllers/url')
const urlRouter = require('./routes/url')
const path = require("path")
const Url = require("./modules/url")
const staticRoute = require("./routes/staticRouter")

const app = express()
const PORT = 8000

connectMongoDb("mongodb://127.0.0.1:27017/urls-1")
.then(()=>{console.log("MongoDb Connected 🥳")})

app.set("view engine", "ejs")
app.set('views', path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.get("/test",async (req, res)=>{
//     const allUrls = await Url.find({})

//     res.render("home",{
//         urls: allUrls,
//     })
// })
app.use("/url",urlRouter)
app.use("/",staticRoute)
app.use("/:shortId",handleRedirectToUrl)


app.listen(PORT,()=>{console.log("server started 🚀")})