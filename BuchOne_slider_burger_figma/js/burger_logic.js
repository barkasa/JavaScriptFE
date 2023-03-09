let menu = document.querySelector(".burger__menu");
let content = document.querySelector(".burger__content");

menu.addEventListener("click", () => open_menu());

let setModal = false;

function open_menu() {
  if (!setModal) {
    let menu_elems = ["главная", "услуги", "кейсы", "о компании", "контакты"];
    let modal_div = document.createElement("div");
    modal_div.className = "modal";
    // content.append(modal_div);

    for (const elem of menu_elems) {
      let a_elem = document.createElement("a");
      a_elem.setAttribute("href", "#");
      a_elem.className = "modal__elem";
      a_elem.innerText = elem.toUpperCase();
      modal_div.append(a_elem);
    }

    const [spanELem1, spanELem2, spanELem3] =
      document.querySelectorAll(".burger__line");
    spanELem1.style.position = "absolute";
    spanELem1.style.transform = "rotate(45deg)";
    spanELem2.style.position = "absolute";
    spanELem2.style.transform = "rotate(315deg)";
    spanELem3.style.position = "absolute";
    spanELem3.style.transform = "rotate(315deg)";
    menu.style.height = "16px";

    content.after(modal_div);
  } else {
    const [spanELem1, spanELem2, spanELem3] =
      document.querySelectorAll(".burger__line");
    spanELem1.style.position = "static";
    spanELem1.style.transform = "none";
    spanELem2.style.position = "static";
    spanELem2.style.transform = "none";
    spanELem3.style.position = "static";
    spanELem3.style.transform = "none";
    menu.style.height = "43px";
    let modal = document.querySelector(".modal");
    modal.remove();
  }
  setModal = !setModal;
}
