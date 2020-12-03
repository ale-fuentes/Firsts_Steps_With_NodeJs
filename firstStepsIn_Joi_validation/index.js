const validations = require("./validations");

const val1 = validations.userSchema.validate({username: 'abc', brith_year: 1994});
console.log("Passed this validation " + !val1.error);
const val2 = validations.userSchema.validate({});
console.log("Passed this validation " + !val2.error);