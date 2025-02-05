const express = require('express')
const path = require('path')
const userRouter = express.Router()

const pathDir = require('../utils/path')

userRouter.get('/', (req,res,next) =>{
    res.sendFile(path.join(pathDir, 'views', 'home.html' ))
})

module.exports = userRouter;