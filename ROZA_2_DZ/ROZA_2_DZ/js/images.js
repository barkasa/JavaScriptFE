//Создайте массив с ссылками на картинки.
//На основе этого массива формируется множество
//маленьких картинок в верхней части интерфейса.
//При нажатии на одну из картинок забирается
//ссылка на эту картинку и в нижней части интерфейса
//отображается в большем размере.

// let userImg = prompt("Add imeg's link"); // запрашиваем у user link
// let userPost = prompt("Add yous post's link"); // получаем link

// const image = document.createElement("img"); //создаем тэг img
// image.setAttribute("src", userImg); //добавляем атрибут crs

// const post = document.createElement("a"); //создаем link
// // post.innerText = "Мой пост";
// post.setAttribute("href", userPost); //добавляем атрибут "href"

// post.setAttribute("target", "_blank"); //чтоб ссылка открывалась в новом окне "target", в новой вкладке "_blank" !!!

// body.append(post); // добавляем в body a
// post.appendChild(image); // добавили в ссылку картинку

// // https://picsum.photos/300

const images = {
  78: {
    name: "Door",
    size: "200x200",
    link: "https://picsum.photos",
  },
  133: {
    name: "Cars",
    size: "200x200",
    link: "https://picsum.photos",
  },
  239: {
    name: "Dandelion",
    size: "200x200",
    link: "https://picsum.photos",
  },
  290: {
    name: "Building",
    size: "200x200",
    link: "https://picsum.photos",
  },
  514: {
    name: "Car",
    size: "200x200",
    link: "https://picsum.photos",
  },
  579: {
    name: "Roadway",
    size: "200x200",
    link: "https://picsum.photos",
  },
  620: {
    name: "Bridge",
    size: "200x200",
    link: "https://picsum.photos",
  },
  859: {
    name: "Bicycle",
    size: "200x200",
    link: "https://picsum.photos",
  },
  903: {
    name: "Milky Way",
    size: "200x200",
    link: "https://picsum.photos",
  },
  1008: {
    name: "Sleeping",
    size: "200x200",
    link: "https://picsum.photos",
  },
};
