const imageOut = document.querySelector(".image-out");
const imageBig = document.querySelector(".image-big");
const imageName = document.querySelector(".image-name");
const imageLink = document.querySelector(".image-link");
const imageSize = document.querySelector(".image-size");

for (let key in images) {
  const imgButtons = document.createElement("button");
  const imgSmall = document.createElement("img");

  const imgBig = document.createElement("img");

  imgSmall.setAttribute("data-key", key);
  imgSmall.setAttribute("src", `img/${key}.png`);
  imgSmall.setAttribute("alt", images[key]["name"]);
  imgBig.setAttribute("data-key", key);
  imgBig.setAttribute("src", `img/${key}.png`);
  imgBig.setAttribute("alt", images[key]["name"]);
  imgBig.setAttribute("class", "big");
  imgBig.setAttribute("id", key);

  imageOut.append(imgButtons);
  imageBig.append(imgBig);
  imgButtons.append(imgSmall);

  imgButtons.onclick = (event) => {
    const key = event.target.dataset["key"];
    // console.log(key);
    if (key === undefined) {
      return true;
    }
    imageName.innerText = images[key]["name"];
    imageSize.innerText = images[key]["size"];
    imageLink.setAttribute("href", "https://picsum.photos");
    imageLink.innerText = images[key]["link"];

    imgBig.classList.toggle("isActive");
  };
}
