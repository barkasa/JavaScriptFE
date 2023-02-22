// Задана ссылка на источник:
// let url = "https://dummyjson.com/products"

// Цель задачи -  реализовать страницу с переключением товаров. К работе выдвинуты следующие требования:

//1. Структура страницы должна приблизительно соответствовать макету (см ниже). Стилизация элементов может быть произвольной
//2. Должны быть реализованы следующие функции: fetch, render, rating и события для кнопок.
//3. В момент загрузки страницы должен отображаться первый товар (id = 1)
//4. После наступления события должен формироваться новый запрос, получающий id следующего/предыдущего товара.
//5. Предусмотрите возможность ограничить переключение на несуществующие товары (id которых меньше 1 или больше 30)

const div_root = document.querySelector("#root");
const product_container = document.createElement("div");
product_container.className = "container";

// const url = "https://dummyjson.com/products";
let currentProductId = 1;

function fetchProducts(id) {
  //   fetch(`${url}${id}`)
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => render(data));
}

function render({ images, title, price, rating }) {
  product_container.innerHTML = "";

  const product_card = document.createElement("div");
  product_card.className = "card";

  const product_img = document.createElement("img");
  product_img.setAttribute("src", images[0]);
  product_img.setAttribute("alt", "avatar");
  product_img.className = "imges";

  const product_title = document.createElement("p");
  product_title.innerText = `Title: ${title}`;

  const product_price = document.createElement("p");
  product_price.innerText = `Price: ${price}`;

  product_card.append(
    product_img,
    product_title,
    product_price,
    nRating(rating)
  );
  product_container.append(product_card);
  div_root.append(product_container);
}

function nRating(rating) {
  let count_stars = Math.round(rating);
  let div_rating = document.createElement("div");
  div_rating.className = "div_rating";

  for (let i = 0; i < 5; i++) {
    let span_elem = document.createElement("span");
    if (count_stars > i) {
      span_elem.className = "fa fa-star active";
    } else {
      span_elem.className = "fa fa-star";
    }
    div_rating.append(span_elem);
  }

  return div_rating;
}

const [prevBtn, nextBtn] = document.querySelectorAll("button");

function changeProduct(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => render(data));
}

prevBtn.addEventListener("click", () => {
  if (currentProductId > 1) {
    currentProductId--;
    fetchProducts(currentProductId);
  } else {
    currentProductId = 31;
  }
});
nextBtn.addEventListener("click", () => {
  if (currentProductId < 31) {
    currentProductId++;
    fetchProducts(currentProductId);
  } else {
    currentProductId = 1;
  }
});

fetchProducts(1);
