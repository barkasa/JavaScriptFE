// 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.
// 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет.
// 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма.
// 4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).
// 5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.
//-----------------------------------------------------------------------------------task_1
const wraapper1 = document.createElement("div");
wraapper1.className = "wraapper";
const wrapperButtons = document.createElement("div");
wrapperButtons.className = "wraapperButtons";
const button = document.createElement("button");
const button2 = document.createElement("button");

const par = document.createElement("p");
const title1 = document.createElement("h3");

button.innerText = "кнопка, скрывающая текст";
button2.innerText = "кнопка, меняющая цвет текста";

button.className = "button";
button2.className = "button";

wraapper1.append(title1, wrapperButtons);
wrapperButtons.append(button, button2, par);
document.body.appendChild(wraapper1);
title1.innerText = "1_Task";
par.innerText = "какой-то текст, который никто и никогда не будет читать...";

button.onclick = () => {
  par.classList.toggle("isActive");
};
button2.onclick = () => {
  par.classList.toggle("isColor");
};

//-----------------------------------------------------------------------------------task_2
const wraapper2 = document.createElement("div");
wraapper2.className = "wraapper";
const wraapperList = document.createElement("div");
wraapperList.className = "wraapperList";
const title2 = document.createElement("h3");
title2.className = "title";
title2.innerText = "2_Task";

const ul = document.createElement("ul");
const li = document.createElement("li");

const colors1 = [
  "#AAA000",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

for (const i in colors1) {
  const li = document.createElement("li");
  li.innerText = colors1[i];
  li.style.width = "100px";
  li.style.height = "30px";
  li.style.backgroundColor = colors1[i];
  li.style.cursor = "pointer";
  li.style.display = "inline-flex";

  li.style.justifyContent = "center";
  li.style.alignItems = "center";
  li.style.fontSize = "1rem";
  li.style.margin = "5px";
  li.style.borderRadius = "10px";
  li.style.border = "1px solid rgb(252, 252, 252)";

  li.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = colors1[i];
  });

  li.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white";
  });

  ul.appendChild(li);
}
wraapperList.appendChild(ul);
wraapper2.append(title2, wraapperList);
document.body.appendChild(wraapper2);
//-----------------------------------------------------------------------------------task_3
const wraapper3 = document.createElement("div");
wraapper3.className = "wraapper";
const topSection = document.createElement("section");
const dounSection = document.createElement("section");
dounSection.className = "dounSection";
const pictures = document.createElement("div");
const title3 = document.createElement("h3");
title3.className = "title";
pictures.className = "picture";
title3.innerText = "3_Task";
topSection.appendChild(pictures);
wraapper3.append(title3, topSection, dounSection);
document.body.appendChild(wraapper3);
const filmName = document.createElement("h3");
const filmYear = document.createElement("p");
const filmDescription = document.createElement("p");
const filmLink = document.createElement("a");
dounSection.append(filmName, filmYear, filmDescription, filmLink);

for (const key in films) {
  const img = document.createElement("img");
  img.setAttribute("data-key", key);
  img.setAttribute("src", `img/${key}.png`);
  img.setAttribute("alt", films[key]["name"]);
  // img.style =
  img.style = "width: 105px";
  img.style.cursor = "pointer";
  img.style.border = "3px solid rgb(152, 152, 152)";
  img.style.borderRadius = "15px";
  img.style.margin = "5px";
  pictures.appendChild(img);
}
pictures.onclick = (event) => {
  const key = event.target.dataset["key"];
  // console.log(key);
  if (key === undefined) {
    return true;
  }
  filmName.className = "image-name";
  filmName.innerText = films[key]["name"];
  filmYear.className = "text";
  filmYear.innerText = films[key]["year"];
  filmDescription.className = "text";
  filmDescription.innerText = films[key]["description"];
  filmLink.setAttribute("href", films[key]["link"]);
  filmLink.className = "text";
  filmLink.innerText = films[key]["link"];

  document
    .querySelectorAll(".picture img")
    .forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
};
//-----------------------------------------------------------------------------------task_4,5
const wraapper4 = document.createElement("div");
const title4 = document.createElement("h3");
title4.innerText = "4_5_Task";

wraapper4.className = "wraapper";

const keyboardKeysWrapp = document.createElement("div");
keyboardKeysWrapp.className = "keyboardWrapp";

const keyboardKeys = document.createElement("div");
keyboardKeys.className = "keyboard";

const textInput = document.createElement("div");
textInput.className = "textInput";

const letters = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "Caps Lock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "/",
  "?",
  "Shift.r",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Fn",
  "Ctrl",
];
const par2 = document.createElement("p");

letters.forEach((key) => {
  const keys = document.createElement("button");
  const insertLineBreack =
    ["Backspace", "}", "Enter", "Shift.r"].indexOf(key) !== -1;
  keys.className = "keysButton";
  keys.innerText = key;
  keyboardKeys.append(keys);
  switch (key) {
    case "Backspace":
      keys.classList.add("keyboard-wide");

      break;
    case "Space":
      keys.classList.add("keyboard-wide-extra");
      break;
  }

  if (insertLineBreack) {
    keyboardKeys.appendChild(document.createElement("br"));
  }

  keys.addEventListener("click", () => {
    par2.innerText = key;
    // keyboardKeysWrapp.classList.remove("keyActive");
    // keys.classList.add("keyActive");

    // console.log(key);
  });
});
wraapper4.append(title4, textInput);
textInput.append(par2);
keyboardKeysWrapp.appendChild(keyboardKeys);

document.body.append(wraapper4, keyboardKeysWrapp);
