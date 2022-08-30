"use strict";

// First level: Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  let anyStr = str

    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");

  console.log(anyStr);
}
camelize("my-short-string");
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

//----------------------------------------------------------------------------------------------
// Second level: Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных
//     чисел отдельно в виде нового массива

//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9]

//     и должна вернуть [8, -11]
//     Сохраняйте вызов этой функции через деструктурирующее присваивание
//     Деструктурирующее присвоение во второй задаче означает, что возвращаемый результат функции
// (return) возвращает массив из двух элементов и соответственно его нужно сохранить в переменную и вывести в консоль

const arr = [1, -2, 3, 4, -9];

let positiveResult = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveResult += arr[i];
  }
}
let negativeResult = 0;
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negativeResult += arr[j];
  }
}
console.log([positiveResult, negativeResult]);
