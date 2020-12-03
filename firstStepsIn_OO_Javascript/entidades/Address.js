module.exports = class Address{

    constructor(street, number, neighborhood, city, uf){
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.uf = uf;
    }

    toString(){
        return `${this.street} ${this.number}, B ${this.neighborhood}, ${this.city} / ${this.uf}`;
    }

}