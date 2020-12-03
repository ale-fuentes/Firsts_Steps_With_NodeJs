const Client = require("./entidades/Client");
const Address = require("./entidades/Address");

const addressAle = new Address("W3 norte", 716, "Asa Norte", "Brasilia", "DF")
const clientAle = new Client('Ale jandro', 44, addressAle, 'ale@email.com');

console.log(`Resume of Client ${clientAle.name}`);
console.log('Datas of the client: ', clientAle);
console.log("What's your first name? ", clientAle.getFirstName());
console.log(`The client live in : ${clientAle.address}`)


console.log(`He's older? ${clientAle.isAdult()} (age comparation is ${Client.olderAge})`);
Client.olderAge = 50;
console.log(`And now, he's older? ${clientAle.isAdult()} (age comparation is ${Client.olderAge})`);
console.log('List of UFs', Client.getUf());
