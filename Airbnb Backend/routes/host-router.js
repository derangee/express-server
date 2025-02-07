const express = require('express')
const path = require('path')
const hostRouter = express.Router();

const pathDir = require('../utils/path')

const homes = [];

const homesController = require('../controllers/home')

hostRouter.get('/add-home', homesController.addHome);

hostRouter.post('/home-added', homesController.homeAdded);

module.exports = {
    hostRouter: hostRouter,
    homes: homes
};