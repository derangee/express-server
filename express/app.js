const express = require('express')


const app = express()

app.use("/", (req, res, next) => { //First Middleware
    console.log("First middleware called" ,req.url, req.path);
    next(); //Function to trigger the next middleware
})

app.use("/contact", (req, res, next) => { //Second Middleware
    console.log("Second middleware called" , req.url, req.path);

})



const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
