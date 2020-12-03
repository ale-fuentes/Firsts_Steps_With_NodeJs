module.exports = class Clientee {
    //properties and functions of the class
    constructor(name, age, address, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.dataAdded = new Date();
    }



    isAdult() {
        console.log(` ---> verification with age ${this.age} and limit ${this.olderAge}`);
        return this.age >= this.olderAge;
    }

    getFirstName() {
        return this.name.split(" ")[0];
    }


    //ussing de static 
    //static a different from const, it can alter its value.
    static olderAge = 18;
    static getUf() {
        return ["DF", "MG", "SC"];
    }

}