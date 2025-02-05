const express  = require('express');
const app = express();



const hostRouter = require('./routes/host-router')
const userRouter = require('./routes/user-router')

app.use(express.urlencoded({ extended: true })); 

app.use('/host', hostRouter)
app.use('/', userRouter)

app.use('/', (req,res,next) =>{ //404
    console.log("404 malware", req.path, req.method);
    res.send('<h1> Error 404! Page not found. </h1>')
})

PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})