const express = require('express')
const path = require('path')
const hostRouter = express.Router();

const pathDir = require('../utils/path')


hostRouter.get('/add-home', (req,res,next) =>{
    res.render('add-home')
})

hostRouter.post('/home-added', (req,res,next)=>{
    console.log(req.body);
    res.render('home-added')
})

module.exports = hostRouter