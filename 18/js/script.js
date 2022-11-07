// const arr = [1, 2, 3, 4, 5, 6, 7];
// let thirdAndFourthIndexes = arr.find((item) => {
//   if (item > 3 && item < 4) {
//     return true;
//   }
// });

// console.log(thirdAndFourthIndexes); // 0

const arr = ["Apple", "Orange", "Lemon", "Cherry", "Apple"];

let indexes = [];
arr.forEach((item, index) => {
  if (item === "Cherry") {
    indexes.push(index);
  }
});
console.log(indexes); // [3]
//---------------------------------------------------------------
const arr2 = ["Apple", "Orange", "Lemon", "Cherry", "Apple"];

let indexes2 = [];
arr.forEach((item, index) => {
  if (item === "Apple") {
    indexes2.push(index);
  }
});
console.log(indexes2); // [4]
//----------------------------------------------------------------
const arr3 = ["Apple", "Orange", "Lemon", "Cherry", "Pineapple", "Pear"];
for (let i = 0; i < arr3.length; i++) {
  const element = arr3[i];
  if (element === arr3[3]) {
    console.log(`3 element arr = ${element}`); // 3 element arr = Cherry
  }
}
//----------------------------------------------------------------
const arr4 = ["Apple", "Orange", "Lemon", "Cherry", "Pineapple", "Pear"];
for (let i = 0; i < arr4.length; i++) {
  const element = arr4[i];
  if (element === arr4[4]) {
    console.log(`4 element arr = ${element}`); // 4 element arr = Pineapple
  }
}
