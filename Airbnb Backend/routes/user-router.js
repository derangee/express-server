const express = require('express')
const userRouter = express.Router()

userRouter.get('/', (req,res,next) =>{
    res.send('<h1> Home </h1>')
})

module.exports = userRouter;