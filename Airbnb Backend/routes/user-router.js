app.get('/', (req,res,next) =>{
    console.log("First middleware", req.path, req.method);
    res.send('<h1> Home </h1>')
})

module.exports = hostRouter;