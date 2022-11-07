// Задача: Написать метод который принимает на вход стрингу вида
// helloworld или mynameis итд, т.е. использует snake case. Соответственно надо написать метод который преобразует snale case в camel case.
// Т.е helloworld == helloWorld итд.
function getCamelCase(str) {
  return str
    .replace(/\s(.)/g, function (a) {
      return a.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function (b) {
      return b.toLowerCase();
    });
}
console.log(getCamelCase("EquipmentClass name")); //equipmentClassName
console.log(getCamelCase("Equipment className")); //equipmentClassName
console.log(getCamelCase("equipment class name")); //equipmentClassName
console.log(getCamelCase("Equipment Class Name")); //equipmentClassName

function whichStudentMore(a, b, n) {
  if (a > b) {
  } else if (
    (a >= 0 && (b >= 10) ** 4, 1 && (n >= 10) ^ 4, 1 && (n <= 10) ^ 4)
  ) {
    return true;
  }

  return false;
}

console.log(whichStudentMore(60, 30, 4)); //true
console.log(whichStudentMore(30, 30, 1)); //false
console.log(whichStudentMore(30, 150, 4)); //false
