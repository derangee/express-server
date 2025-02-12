const HomeModel = require('../models/home-model')
let homes;

exports.setHomes = (homesArray) => {
    homes = homesArray;
};

exports.addHome = (req, res, next) => {
    res.render('host/add-home')
};

exports.homeAdded = (req, res, next) => {
    const newHome = new HomeModel(req.body.home, req.body.location, req.body.price, req.body.photo)
    newHome.save(); 
    res.render('host/home-added')
};

exports.homePage = (req, res) => {
    const homes = HomeModel.fetchAll(homes => {
        res.render('store/home', { homes: homes })
    }); 
}

exports.favouritePage = (req, res) => {
    const homes = HomeModel.fetchAll(homes => {
        res.render('store/favourite', { homes: homes })
    }); 
}

exports.bookingsPage = (req, res) => {
     res.render('store/bookings')
}

exports.hostHomes = (req, res, next) => {
    const homes = HomeModel.fetchAll(homes => {
        res.render('host/host-home', { homes: homes })
    }); 
};






