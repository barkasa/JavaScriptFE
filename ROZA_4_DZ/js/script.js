//slider creation

const conteiner = document.createElement("div");
const sleider = document.createElement("div");
const sleiderline = document.createElement("div");
const filmsBoxTop = document.createElement("div");
const filmsBoxBottom = document.createElement("div");
for (let i = 1; i < 8; i++) {
  const films = document.createElement("div");
  films.classList.add("film");
  filmsBoxTop.appendChild(films);
}
for (let i = 1; i < 8; i++) {
  const films = document.createElement("div");
  films.classList.add("film");

  filmsBoxBottom.appendChild(films);
}
//button creation
const buttonBox = document.createElement("div");
const buttonNext = document.createElement("button");
const buttonPrevious = document.createElement("button");
//slider settings

conteiner.classList.add("conteiner");
sleider.classList.add("sleider");
sleiderline.classList.add("clider-line");
filmsBoxTop.classList.add("film-box");
filmsBoxBottom.classList.add("film-box");
//button settings
buttonBox.classList.add("button-box");
buttonNext.classList.add("button-next");
buttonNext.innerText = "Next";
buttonPrevious.classList.add("button-previous");
buttonPrevious.innerText = "Previous";
//binding
buttonBox.append(buttonNext, buttonPrevious);
sleider.appendChild(sleiderline);
conteiner.append(filmsBoxTop, sleider, filmsBoxBottom);
document.body.append(conteiner, buttonBox);
//pictures array
const slides = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//slide creation
for (let i = 1; i <= slides.length; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `img/${i}.png`);
  img.setAttribute("alt", "black cat");
  img.style.width = "256px";

  sleiderline.append(img);
}
//===============================================

let offset = 0; // смещение next
buttonNext.onclick = () => {
  offset += 256;
  if (offset > 2048) {
    offset = 0;
  }
  sleiderline.style.left = -offset + "px";
};
// смещение previous
buttonPrevious.onclick = () => {
  offset -= 256;
  if (offset < 0) {
    offset = 2048;
  }
  sleiderline.style.left = -offset + "px";
};
