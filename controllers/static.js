function renderHomePageHandler(req,res){
    res.render("index.ejs")
   res.end()
}

module.exports = {
    renderHomePageHandler,
}