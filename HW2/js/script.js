"use strict";

//задание_1

for (let i = 2; i <= 10; i++) {
  // for (let i = 2; i <= 10; i+=2)
  if (i % 2 == 0) {
    /*continue;*/ console.log(i);
  }
}

//задание_1.1

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

//задание_2

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Are You agree?",
  () => console.log("done"),
  () => console.log("cansel")
);
