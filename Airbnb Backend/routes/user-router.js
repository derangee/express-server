const express = require('express')
const userRouter = express.Router()


const homesController = require('../controllers/controller')

userRouter.get('/', homesController.homePage)

userRouter.get('/favourites',homesController.favouritePage )
userRouter.get('/bookings',homesController.bookingsPage )


module.exports = userRouter;