const clients_slider = document.querySelector(".clients_slider");
// const left_btn = document.querySelector("#clientPrevBtn");
// const right_btn = document.querySelector("#clientNextBtn");
// const dots = document.querySelector("#clientDots");

let slider_index = 0;

const logos = [
  "./images/micro.png",
  "./images/micro.png",
  "./images/micro.png",
  "./images/micro.png",
];

const client_wrap = document.createElement("div");
client_wrap.className = "client_slider_wrap";

for (const item of logos) {
  let client_bild = document.createElement("img");
  client_bild.className = "fitback_slider_item";
  client_bild.setAttribute("src", `images/${item}.png`);
  client_bild.setAttribute("alt", "logo_image");
  client_wrap.append(client_bild);
}

clients_slider.append(client_wrap);

// function go_right() {
//   if (slider_index < images.length - 1) {
//     slider_index++;
//   } else {
//     slider_index = 0;
//   }
//   slider_wrap.style.left = `${-1 * slider_index * 100}%`;

//   setActiveDot(slider_index);
// }

// function go_left() {
//   if (slider_index != 0) {
//     slider_index--;
//   } else {
//     slider_index = images.length - 1;
//   }
//   slider_wrap.style.left = `${-1 * slider_index * 100}%`;

//   setActiveDot(slider_index);
// }

// create_round();
