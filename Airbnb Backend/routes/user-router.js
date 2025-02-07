const express = require('express')
const userRouter = express.Router()


const homesController = require('../controllers/home')

userRouter.get('/', homesController.homePage)

module.exports = userRouter;