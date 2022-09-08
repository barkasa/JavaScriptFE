"use strict";

// first level:

// console.log(berlin.age())
// console.log(paris.age())

// let berlin = {
//   name: "Берлин",
//   population: 3645000,
//   foundingDate: 1237,
//   currentDate: 2022,
//   age: function getAge() {
//     return "Берлину " + (this.currentDate - this.foundingDate) + " лет";
//   },
// };

// let paris = {
//   name: "Париж",
//   population: 6000000,
//   foundingDate: -53,
//   currentDate: 2022,
//   age: function getAge() {
//     return "Парижу " + (this.currentDate - this.foundingDate) + " лет";
//   },
// };
// console.log(berlin.age());
// console.log(paris.age());
//------------------------------------------------------------------------------------------------------
// Second level:
function yearIdentifier(year) {
    let yearStr = String(year);
    let yearEnd = yearStr.slice(-1);

    switch (yearEnd) {
      case "1":
        return "год.";
      case "2":
      case "3":
      case "4":
        return "года.";
      default:
        return "лет.";
    }
  }

function getMyAgeDifference(ageNumber) {
  let res = this.age() - ageNumber;

  
  return ` ${this.name} старше меня на ${res} ${yearIdentifier(res)}`;
}

function getAge() {
  let result = this.currentDate - this.foundingDate;
  return result;
}

let berlin = {
  name: "Берлин",
  population: 3645000,
  foundingDate: 1237,
  currentDate: 2022,
};

berlin.age = getAge;
berlin.myAge = getMyAgeDifference;

let paris = {
  name: "Париж",
  population: 6000000,
  foundingDate: -51,
  currentDate: 2022,
};

paris.age = getAge;
paris.myAge = getMyAgeDifference;

console.log(`Берлину: ${berlin.age()} ${yearIdentifier(berlin.age())}`);
console.log(`Парижу: ${paris.age()} ${yearIdentifier(paris.age())}`);
console.log(berlin.myAge(42));
console.log(paris.myAge(44));
