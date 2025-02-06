const express = require('express')
const path = require('path')
const hostRouter = express.Router();

const pathDir = require('../utils/path')

const homes = [];

hostRouter.get('/add-home', (req,res,next) =>{
    res.render('add-home')
})

hostRouter.post('/home-added', (req,res,next)=>{
    homes.push({House : req.body.home, Location : req.body.location , Price : req.body.price});
    res.render('home-added')
})

exports.hostRouter = hostRouter
exports.homes = homes