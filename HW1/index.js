//задача №1

const piString = "3.14";
const piNumber = Number(piString);
console.log(piString == piNumber);
console.log(piString === piNumber);

//задача №2

const totalSum = 100;
const tomatPrice = 10;
const cucumberPrice = 5;
const applePrice = 15;
let nutsPrice = null;
let buying = tomatPrice * 2 + cucumberPrice * 2 + applePrice * 2;
let rest = totalSum - buying;

console.log(rest);
nutsPrice == rest;

if (nutsPrice > buying) {
  console.log("Больше потратили на орехи");
} else {
  console.log("Больше потратили на фрукты и овощи");
}
