function createSlider(className, arr, parentElement, section) {
  for (const item of arr) {
    let bild = document.createElement("img");
    bild.className = className;
    bild.setAttribute("src", `images/${item}.png`);
    bild.setAttribute("alt", "image");
    parentElement.append(bild);
  }
  section.append(parentElement);
}
//функция меняет титл
function updateTitleText(index, Arr, item) {
  item.innerHTML = Arr[index];
}
//функция меняет название кнопки
function updateButtonText(index, Arr, item) {
  item.innerHTML = Arr[index];
}
//функция делает активными переключения дотов cерые
function setActiveDot(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dotses) => dotses.classList.remove("active"));
  dots[index].classList.add("active");
}
//меняет инфу в титле и кнопке (объединенная в одну)
function abdateInfo() {
  updateTitleText(slider_index, title, title__item);
  updateButtonText(slider_index, button_title, title__button);
}
//функция создает доты
function create_round(arr, sliderWraper, width) {
  for (let i = 0; i < arr.length; i++) {
    const dotses = document.createElement("button");
    dotses.className = "dot";
    dots.append(dotses);

    dotses.addEventListener("click", () => {
      slider_index = i;
      sliderWraper.style.left = `${-1 * slider_index * width}%`;

      abdateInfo(); //меняет инфу в титле и кнопке

      const buttons = dotses.parentElement.childNodes;
      buttons.forEach((el) => el.classList.remove("active"));

      dotses.classList.add("active");
    });
  }
}
// переключение вправо
function go_right(arr, sliderWraper, width, btn) {
  btn.onclick = () => {
    if (slider_index < arr.length - 1) {
      slider_index++;
    } else {
      slider_index = 0;
    }
    sliderWraper.style.left = `${-1 * slider_index * width}%`;
    abdateInfo(); //меняет инфу в титле и кнопке
    setActiveDot(slider_index); //функция делает активными переключения дотов
  };
}
// переключение влево
function go_left(sliderWraper, width, btn) {
  btn.onclick = () => {
    if (slider_index != 0) {
      slider_index--;
    } else {
      slider_index = images.length - 1;
    }
    sliderWraper.style.left = `${-1 * slider_index * width}%`;
    abdateInfo(); //меняет инфу в титле и кнопке
    setActiveDot(slider_index); //функция делает активными переключения дотов
  };
}
/////////////////////////////////////////////////////////////////////
//функция делает активными переключения дотов голубые

function setActiveDotBlau(index) {
  const punkt = document.querySelectorAll(".dots_blau");
  punkt.forEach((dotses) => dotses.classList.remove("active_blau"));
  punkt[index].classList.add("active_blau");
}

function create_blau_dots(arr, sliderWraper, width, id) {
  for (let i = 0; i < arr.length; i++) {
    const dotses = document.createElement("button");
    dotses.className = "dots_blau";
    id.append(dotses);

    dotses.addEventListener("click", () => {
      slider_index = i;
      sliderWraper.style.left = `${-1 * slider_index * width}%`;
      const buttons = dotses.parentElement.childNodes;
      buttons.forEach((el) => el.classList.remove("active_blau"));

      dotses.classList.add("classNameActiv");
    });
  }
}
// переключение вправо
function right(arr, sliderWraper, width, btn) {
  btn.onclick = () => {
    if (slider_index < 3) {
      slider_index++;
    } else {
      // imageCards.style.transition = "0.5s";
      slider_index = 0;
      // imageCards.style.transition = "0.5s";
    }
    sliderWraper.style.left = `${-1 * slider_index * width}%`;
    setActiveDotBlau(slider_index); //функция делает активными переключения дотов
  };
}
// переключение влево
function left(sliderWraper, width, btn, arr) {
  btn.onclick = () => {
    const sliderItemsPerPage = 1; // количество элементов, которые будут показываться на слайдере
    const totalSlides = Math.ceil(arr.length / sliderItemsPerPage); // общее количество слайдов
    if (slider_index != 0 && sliderItemsPerPage == 1) {
      if (arr.length > sliderItemsPerPage) {
        // если количество элементов в массиве больше 4
        if (slider_index % sliderItemsPerPage == 0) {
          // если индекс элемента кратен 4
          slider_index -= sliderItemsPerPage;
        } else {
          slider_index -= slider_index % sliderItemsPerPage;
        }
      } else {
        slider_index--;
      }
    } else {
      slider_index = arr.length - 1;
    }
    sliderWraper.style.left = `${-1 * slider_index * width}%`;
    setActiveDotBlau(slider_index); //функция делает активными переключения дотов
  };
}
