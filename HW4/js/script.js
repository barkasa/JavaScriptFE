"use strict";

// First level:
// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumAll(salaryObject) {
  let sum = 0;

  for (const key in salaryObject) {
    sum += salaryObject[key];
  }

  return sum;
}

console.log(`Total employee salary = ${sumAll(salaries)} euros.`);

//--------------------------------------------------------------------------------------------------------------------

// Second level:             Умножаем все числовые свойства на 2
//             Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
