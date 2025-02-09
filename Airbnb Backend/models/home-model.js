const homes = [];


module.exports = class Home {
    constructor(home, location,  price, photo ) {
        this.home = home;
        this.location = location;
        this.price = price;
        this.photo = photo;
    }

    save() {
        homes.push(this);
    }

    static fetchAll() {
        return homes;
    }
}