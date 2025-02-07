const express = require('express')
const path = require('path')
const userRouter = express.Router()

const pathDir = require('../utils/path')

const homesController = require('../controllers/home')

userRouter.get('/', homesController.homePage)

module.exports = userRouter;