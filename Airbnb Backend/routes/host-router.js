const express = require('express')
const path = require('path')
const hostRouter = express.Router();
const pathDir = require('../utils/path')

const homes = [];

const homesController = require('../controllers/controller')
homesController.setHomes(homes);

hostRouter.get('/add-home', homesController.addHome);
hostRouter.post('/home-added', homesController.homeAdded);

module.exports = {
    hostRouter,
    homes
};