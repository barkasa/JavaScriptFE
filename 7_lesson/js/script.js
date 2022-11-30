// // preventDefault - отменяем все действия для формы от браузера и назаначаем свое
// const btn = document.querySelector("button");
// const name = document.querySelector("#first-name");

// btn.onclick = (event) => {
//   event.preventDefault(); // button не делает ничего, все его действия по дефолту отменены
//   //   alert("Welcom!");
//   alert(name.value); //value - ключь значение, через которое получаем доступ к name
// };
//===================================================================

const form = document.querySelector("#form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");
const buttonTotal = document.querySelector(".button-total");
const passwordControlButton = document.querySelector(".password-control");
const passwordInput = document.querySelector("#password-input");

let products = [];

titleInput.setAttribute("required", "true");
priceInput.setAttribute("required", "true");

form.onsubmit = (e) => {
  e.preventDefault();

  //   alert("wow!");
  //   console.log(titleInput.value, priceInput.value);

  products.push({
    title: titleInput.value,
    price: priceInput.value,
  });

  //   creadeNode(titleInput.value, priceInput.value);
  //   console.log(products);
  newProducts();
  totalPrice();

  titleInput.value = "";
  priceInput.value = "";
};

function creadeNode(title, price) {
  let div = document.createElement("div");
  div.classList.add("product");
  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText = title;
  priceP.innerText = price;

  div.append(titleP, priceP);
  div.ondblclick = () => {
    alert(title);
  };
  sectionProducts.append(div);
}

function newProducts() {
  sectionProducts.innerHTML = ""; // удаляет и текст и тэги и перезаписывает предыд. значения
  for (let i = 0; i < products.length; i++) {
    creadeNode(products[i].title, products[i].price);
  }
}

function totalPrice() {
  buttonTotal.onclick = () => {
    let sum = 0;
    for (const key in products) {
      sum += +products[key].price;
    }

    alert(sum);
  };
}

// 1)К сегодняшней форме добавьте кнопку. При клике на кнопку с помощью alert выводите итоговую сумму всех товаров.
// 2)Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться, а при повторном нажатии должен появиться обратно.

//------------------------------------------------------------------------task_2

passwordControlButton.addEventListener("click", () => {
  passwordInput.type = passwordInput.type == "password" ? "text" : "password";
});

// var arr = [3,2,5,6];
// function arraySum(array){
// var sum = 0;
// for(var i = 0; i < array.length; i++){
// sum += array[i];
// }
// console.log(sum);
// }
// arraySum(arr);
