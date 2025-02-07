let homes;

exports.setHomes = (homesArray) => {
    homes = homesArray;
};

exports.addHome = (req, res, next) => {
    res.render('add-home')
};

exports.homeAdded = (req, res, next) => {
    homes.push({ House: req.body.home,  Location: req.body.location,  Price: req.body.price,  Photo: req.body.photo });
    res.render('home-added')
};

exports.homePage = (req, res) => {
    res.render('home', { homes: homes})
}