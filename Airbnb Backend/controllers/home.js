exports.addHome = (req,res,next) =>{
    res.render('add-home')
};

exports.homeAdded =  (req,res,next)=>{
    homes.push({House : req.body.home, Location : req.body.location , Price : req.body.price, Photo : req.body.photo});
    res.render('home-added')
}


const { homes } = require('../routes/host-router')

exports.homePage = (req, res) => {
    console.log('Current homes:', homes)
    res.render('home', { homes: homes })
}

