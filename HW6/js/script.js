"use strict";
// First level:
//         Создайте input type text и три кнопки
//         кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
//         1. Кнопка "Очистить input" (удалять содержимое value тега input)
//         2. Кнопка заблокировать инпут (disabled setAttribute)
//         3. Кнопка разблокировать инпут (disabled removeAttribute)
//         или input.disabled = true/false;

let clearInput = document.querySelector(".clear-input");
let clearButton = document.querySelector(".clear-button");

let blockButton = document.querySelector(".block-button"); // 2. Кнопка заблокировать инпут (disabled setAttribute)

let unblockButton = document.querySelector(".unblock-button"); // 3. Кнопка разблокировать инпут (disabled removeAttribute)

clearButton.addEventListener("click", toClearTransfer); // приклепляем событие очистки инпута

function toClearTransfer() {
  // // функция для события очистки инпута, замена текста на cleaned
  clearInput.value = "cleaned";
}

blockButton.addEventListener("click", toDisabled); // приклепляем событие блокировки инпута
unblockButton.addEventListener("click", toUnDisabled); // приклепляем событие разблокировки инпута

function toDisabled() {
  // функция для события блокировки инпута и замена текста на disabled
  clearInput.setAttribute("disabled", true); //setAttribute
  clearInput.value = "blocked";
}
function toUnDisabled() {
  // функция для события разблокировки инпута и замена текста на unblock
  clearInput.removeAttribute("disabled", true); //removeAttribute
  clearInput.value = "unblocked";
}

// Second level:         Создайте в HTML два текстовых инпута и кнопку
//         Напишите функцию, которая будет по нажатию на кнопку
//         менять содержимое инпутов (value) местами

let changeInputLeft = document.querySelector(".change-input-left");
let changeButton = document.querySelector(".change-button");
let changeInputRight = document.querySelector(".change-input-right");

changeButton.addEventListener("click", changeInput);

function changeInput() {
  let changeInputLeftValue = changeInputLeft.value;
  changeInputLeft.value = changeInputRight.value;
  changeInputRight.value = changeInputLeftValue;


}
