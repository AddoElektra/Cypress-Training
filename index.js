require('dotenv').config()
const username= process.env.name;
const pass= process.env.pass;
//const pass = cypress.env('pass');

console.log(username);
console.log(pass);