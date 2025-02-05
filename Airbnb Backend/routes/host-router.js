const express = require('express')
const hostRouter = express.Router();

hostRouter.get('/add-home', (req,res,next) =>{
    res.send(`
        <h1> Enter details </h1>
        <form action="/host/add-home" method="POST">
        <h1> Add your home : </h1>
            <input type="text" name="home" placeholder="Enter the name of the home"/>
            <input type="text" name="locarion" placeholder="Enter the location"/>
            <input type="text" name="price" placeholder="Enter the price of the home"/>
            <input type="submit"/>
        </form>  `)
})

hostRouter.post('/add-home', (req,res,next)=>{
    console.log(req.body);
    res.send('<h1> Home details received </h1>')
})

module.exports = hostRouter