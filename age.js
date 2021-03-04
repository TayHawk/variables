/*
Write a program named age.js that includes someone's age and 
then calculates and reports the future age in 10, 20, 30 and 40 years. 
*/

let readSyn = require('readline-sync');
let age = parseInt(readSyn.question('How old are you? '));
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age +10} years old.`);
console.log(`In 20 years, you will be ${age +20} years old.`);
console.log(`In 30 years, you will be ${age +30} years old.`);
console.log(`In 40 years, you will be ${age +40} years old.`);

/*

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

*/