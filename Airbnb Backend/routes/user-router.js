const express = require('express')
const path = require('path')
const userRouter = express.Router()

const pathDir = require('../utils/path')

const {homes} = require('./host-router')

userRouter.get('/', (req,res,next) =>{
    console.log(homes)
    res.render('home', {homes : homes})}
)

module.exports = userRouter;