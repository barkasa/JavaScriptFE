const imageOut = document.querySelector(".image-out");

for (let key in images) {
  const imgLink = document.createElement("a");
  const img = document.createElement("img");

  img.setAttribute("data-key", key);
  img.setAttribute("src", `img/${key}.png`);
  img.setAttribute("alt", images[key]["name"]);

  img.onclick = function () {
    img.classList.add("isActiv");
  };

  imageOut.append(imgLink);
  imgLink.append(img);
}

// imageOut.addEventListener("click", increase);

// function increase() {
//   imageOut
//     .querySelectorAll(".image-out img")
//     .forEach((e) => e.classList.add("active"));
// }

// imageOut
//   .querySelectorAll(".image-out img")
//   .forEach((item) => item.classList.add("active"));

// keyup
// keydown
// keypress
// image.setAttribute("src", userImg); //добавляем атрибут crs

// const post = document.createElement("a"); //создаем link
// // post.innerText = "Мой пост";
// post.setAttribute("href", userPost); //добавляем атрибут "href"
