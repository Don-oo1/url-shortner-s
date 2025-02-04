const express = require("express")
const {connectMongoDb} = require("./connection")
const {redirectRouter} = require("./routes/redirect")
const {urlRouter} = require("./routes/urls")
const {staticRouter} =require("./routes/static")
const {faviconeHandler} = require("./middlewares/favicon")

const app = express()
const PORT = 8000

//db connections
connectMongoDb("mongodb://127.0.0.1:27017/url-1")
.then(()=>{console.log("Db connected 🥳")})


//modelwares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(faviconeHandler)

//routes

app.use("/url",urlRouter)
app.use("/",staticRouter)
app.use("/",redirectRouter)

app.listen(PORT, ()=>{console.log("server started 🚀")})