function faviconeHandler(req,res,next){
    if(req.path == "/favicon.ico"){
        return res.end()
    }
    next()
}
module.exports = {faviconeHandler,}