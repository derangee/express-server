const path = require('path');
const fs = require('fs')
const rootDir = require('../utils/path')


module.exports = class Home {
    constructor(home, location,  price, photo ) {
        this.home = home;
        this.location = location;
        this.price = price;
        this.photo = photo;
    }

    save() {
        Home.fetchAll(homes => {
            homes.push(this);
        const homePath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(homePath, JSON.stringify(homes), error=>{
            console.log("File written finished", error);
        })
        })
        
    }

    static fetchAll(callback) {
        const homePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homePath, (err,data) =>{
            console.log("File read : ", data);

            if(!err) {
                callback(JSON.parse(data));
            }

            
            else{
                callback([]);
            }
        })
    }
}