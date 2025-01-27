const express = require('express')
const {connectMongoDb} = require('./connections')
const {handleRedirectToUrl} = require('./controllers/url')
const urlRouter = require('./routes/url')
const path = require("path")
const staticRoute = require("./routes/staticRouter")
require('dotenv').config();

const app = express()
const PORT =  8000

const MONGO_URI = process.env.MONGO_URI ; 

connectMongoDb(MONGO_URI)
.then(()=>{console.log("MongoDb Connected 🥳")})

app.set("view engine", "ejs")
app.set('views', path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use("/url",urlRouter)
app.use("/:shortId",handleRedirectToUrl)
app.use("/",staticRoute)

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})