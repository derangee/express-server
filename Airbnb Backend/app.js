const express  = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); 

const hostRouter = require('../Airbnb Backend/routes/host-router')
const userRouter = require('../Airbnb Backend/routes/user-router')

app.listen('/host', hostRouter)
app.listen('/',userRouter)






app.use('/', (req,res,next) =>{
    console.log("First middleware", req.path, req.method);
    res.send('<h1> Error 404! Page not found. </h1>')
})

PORT = 5005;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})