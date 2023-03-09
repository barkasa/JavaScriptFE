const slider_section = document.querySelector(".slider__section");
const title__item = document.querySelector(".title__item");
const title__button = document.querySelector(".title__button");
const dots = document.querySelector("#mainSliderDots");
const left_btn = document.querySelector(".prev-btn");
const right_btn = document.querySelector(".next-btn");

const slider_wrap = document.createElement("div");
slider_wrap.className = "sleider__wrap";
const className = "slider__item";
let slider_index = 0;
const title = [
  "Бухгалтерские услуги в вашем городе",
  "Строительные услуги в вашем городе",
  "Финансовые услуги в вашем городе",
  "Услуги и сервисы во всех регионах",
];
const button_title = [
  "Наша презентация",
  "Посмотреть услуги",
  "Узнайте больше",
  "Посмотреть регионы",
];
const images = ["1", "2", "3", "4"];

createSlider(className, images, slider_wrap, slider_section);
create_round(images, slider_wrap, 100);
go_right(images, slider_wrap, 100, right_btn);
go_left(slider_wrap, 100, left_btn);

///////////////////////////////////////////////////////////
// client
//////////////////////////////////////////////////////////
const clients_slider = document.querySelector(".clients_slider");
const clientDots = document.querySelector("#clientDots");
const prevclient = document.querySelector("#prevclient");
const nextclient = document.querySelector("#nextclient");

const clients = [
  "micro",
  "github",
  "offis",
  "msn",
  "bing",
  "gitbook",
  "graphql",
  "ibm",
  "xbox",
  "abdi",
  "FedEx",
  "netflix",
  "nokia",
  "OneWeb",
  "toronto",
  "UOL",
];

const client_slider_wrap = document.createElement("div");
client_slider_wrap.className = "client_slider_wrap";

createSlider("client_cards", clients, client_slider_wrap, clients_slider);
// create_blau_dots(clients, client_slider_wrap, 100, clientDots);
right(clients, client_slider_wrap, 100, nextclient);
left(client_slider_wrap, 100, prevclient, clients);
///////////////////////////////////////////////////////////
// fitback
//////////////////////////////////////////////////////////
const fitback_content = document.querySelector(".fitback_content");

const fitbackDots = document.querySelector("#fitbackDots");
const left_btn_fit = document.querySelector("#prevFit");
const right_btn_fit = document.querySelector("#nextFit");

const fitback = [
  {
    id: 1,
    text: "Хочу выразить огромную благодарность воспитателю группы `Теремок` Нине Евгеньевне! За трепетное отношение к детям, заботу и внимание! А также, большое спасибо воспитателям и педагогам за подготовку и проведение новогоднего праздника для малышей!!!",
    nickName: "Екатерина Иванова",
    position: "Директор ООО “Раз-два",
    avatar: "avatar_1",
  },
  {
    id: 2,
    text: "Шамина Любовь Николаевна- великолепный специалист. Я- благодарная студентка, которая очень рада, что встретила на своём учебном пути такого профессионала. Очень терпеливый, отзывчивый человек! Отдельную благодарность хочется выразить за готовность помочь молодым специалистам, Любовь Николаевна- великолепный наставник, у которого с большим удовольствием можно проходить практику и набираться опыта!",
    nickName: "Larunya72",
    position: "студентка",
    avatar: "avatar_2",
  },
  {
    id: 3,
    text: "Хорошо молодой человек постарался!!! Видно, что все с душой и сердцем!!!",
    nickName: "Петр Ивашов",
    position: "строитель",
    avatar: "avatar_5",
  },
  {
    id: 4,
    text: "Это был хороший опыт, Конечно совершенству и пределу нет границ, но и то, что получилось, я считаю хорошим результатом. Спасибо!",
    nickName: "Анвар Закиров",
    position: "педиатор",
    avatar: "avatar_6",
  },
];

// function createInfoBlockFitback() {
let parent_wraper = document.createElement("div");
parent_wraper.className = "parent_wraper";

for (const item of fitback) {
  let card = document.createElement("div");
  let fitback = document.createElement("p");
  let wrap_info = document.createElement("div");
  let wrap_info_text = document.createElement("div");
  let avatar = document.createElement("img");
  let nick_name = document.createElement("p");
  let position = document.createElement("p");
  avatar.setAttribute("src", `images/${item.avatar}.png`);
  avatar.setAttribute("alt", "avatar");
  fitback.innerText = item.text;
  nick_name.innerText = item.nickName;
  position.innerText = item.position;

  fitback.className = "fitback";
  avatar.className = "avatar_fitback";
  nick_name.className = "nick_name";
  position.className = "position";
  wrap_info.className = "parentInfo";
  wrap_info_text.className = "wrap_info_text";
  card.className = "fitback_card";

  wrap_info_text.append(nick_name, position);
  wrap_info.append(avatar, wrap_info_text);

  card.append(fitback, wrap_info);
  parent_wraper.append(card);
}

fitback_content.append(parent_wraper);

create_blau_dots(fitback, parent_wraper, 100, fitbackDots);
right(fitback, parent_wraper, 100, right_btn_fit);
left(parent_wraper, 100, left_btn_fit, fitback);
