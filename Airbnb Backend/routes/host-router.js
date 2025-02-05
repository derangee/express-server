const express = require('express')
const path = require('path')
const hostRouter = express.Router();

const pathDir = require('../utils/path')


hostRouter.get('/add-home', (req,res,next) =>{
    res.sendFile(path.join(pathDir, 'views', 'add-home.html' ))
})

hostRouter.post('/home-added', (req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(pathDir, 'views', 'home-added.html' ))
})

module.exports = hostRouter