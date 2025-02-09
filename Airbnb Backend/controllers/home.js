const HomeModel = require('../models/home-model')
let homes;

exports.setHomes = (homesArray) => {
    homes = homesArray;
};

exports.addHome = (req, res, next) => {
    res.render('add-home')
};

exports.homeAdded = (req, res, next) => {
    const newHome = new HomeModel(req.body.home, req.body.location, req.body.price, req.body.photo)
    newHome.save(); 
    res.render('home-added')
};

exports.homePage = (req, res) => {
    const homes = HomeModel.fetchAll(homes => {
        res.render('home', { homes: homes })
    }); 
}