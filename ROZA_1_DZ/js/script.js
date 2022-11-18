//----1.Создать пронумерованные списки с товарами(на основе массива собъектами);
const container = document.createElement("div");
container.setAttribute("id", "product_lists");

const body = document.querySelector("body");
body.appendChild(container);

const productList = [
  {
    title: "BMW",
    price: "40000",
    count: "15",
  },

  {
    title: "Toyota",
    price: "20000",
    count: "13",
  },

  {
    title: "Ford",
    price: "30000",
    count: "20",
  },

  {
    title: "Chevrolet",
    price: "60000",
    count: "9",
  },

  {
    title: "Volkswagen",
    price: "30000",
    count: "13",
  },
];

// console.log(container);

for (let i = 0; i < productList.length; i++) {
  const list = document.createElement("ol");
  const title = document.createElement("li");
  const price = document.createElement("li");
  const count = document.createElement("li");
  list.setAttribute("class", "collection");
  list.setAttribute("id", `${i}`);
  // list.innerText = `${i}`;
  list.append(title, price, count);
  container.appendChild(list);
  title.innerText = `model: ${productList[i].title}`;
  price.innerText = `price: ${productList[i].price} €`;
  count.innerText = `count: ${productList[i].count}`;
}

//----2.написать скрипт, который выводит списки с товарами в интерфэйс
// (на основе массива с объектами с прошлой задачи), в низу выводится
// итоговая сумма товаров и их колличество.

const totalPrice = document.createElement("p");
const totalCount = document.createElement("p");
container.appendChild(totalPrice);
container.appendChild(totalCount);

let totalP = 0;
let totalC = 0;
for (let i = 0; i < productList.length; i++) {
  totalP += +(productList[i].price * productList[i].count);
  totalC += +productList[i].count;
}

totalPrice.innerText = `Total sum of Car's: ${totalP} €`;
totalCount.innerText = `Total count of Car's: ${totalC}`;

//----3.написать скрипт, который выводит в интфейс следующую таблицу:

const table = document.createElement("table");
table.setAttribute("class", "table");
body.appendChild(table);

let tabString = [
  {
    Num: "№",
    FullName: "Full Name",
    Position: "Position",
    Salary: "Salary",
  },
  {
    Num: "1.",
    FullName: "Kill Bill",
    Position: "Founder Microsoft",
    Salary: "1000 $",
  },
  {
    Num: "2.",
    FullName: "Steve Jobs",
    Position: "Founder Apple",
    Salary: "1200 $",
  },
  {
    Num: "3.",
    FullName: "Larry Page",
    Position: "Founder Google",
    Salary: "1100 $",
  },
  {
    Num: "4.",
    FullName: "Mark Zuckerberg",
    Position: "Founder Facebook",
    Salary: "1300 $",
  },
];

for (let i = 0; i < tabString.length; i++) {
  const columnTitle = document.createElement("tr");

  const columnTitleItem1 = document.createElement("td");
  columnTitleItem1.setAttribute("id", `b${i}`);

  const columnTitleItem2 = document.createElement("td");
  columnTitleItem2.setAttribute("id", `c${i}`);

  const columnTitleItem3 = document.createElement("td");
  columnTitleItem3.setAttribute("id", `d${i}`);

  const columnTitleItem4 = document.createElement("td");
  columnTitleItem4.setAttribute("id", `e${i}`);

  table.append(columnTitle);
  columnTitle.append(
    columnTitleItem1,
    columnTitleItem2,
    columnTitleItem3,
    columnTitleItem4
  );

  columnTitleItem1.innerText = tabString[i].Num;
  columnTitleItem2.innerText = tabString[i].FullName;
  columnTitleItem3.innerText = tabString[i].Position;
  columnTitleItem4.innerText = tabString[i].Salary;
}

const numString = document.getElementsByTagName("tr")[0];
numString.style.fontSize = "20px";
