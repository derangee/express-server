const express = require('express')


const app = express()

app.use((req, res, next) => { //First Middleware
    console.log("First middleware called");
    next(); //Function to trigger the next middleware
})

app.use((req, res, next) => { //Second Middleware
    console.log("Second middleware called");
})


const PORT = 5050;

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})