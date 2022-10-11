//1.
// ДЗ Функция cut принимает на вход строку, режет её посередине
// и возвращает первую половину. Если в строке нечётное число
// символов, то округлить в меньшую сторону

function cut(str) {
  return str.substr(0, str.length / 2);
}
console.log(cut("Клеопатра")); // Клео
console.log(cut("123456789")); // 1234

//2.
// ДЗ Функция kingSaid принимает на вход строку str и добавляет к
// её началу фразу "Король сказал: ". Если строка уже начинается
// с фразы "Король сказал: ", то ничего добавлять не надо.
// пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
//         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"

function kingSaid(str) {
  const startStr = "Король сказал:";
  const re = /Король сказал:/g;
  const match = str.match(re);
  if (startStr == match) {
    return str;
  }
  return `${startStr} ${str}`;
}

console.log(kingSaid("Король сказал: хочу банан")); //Король сказал: хочу банан
console.log(kingSaid("я устал, я ухожу")); //Король сказал: я устал, я ухожу

//3.
// ДЗ Функция isItFridayToday возвращает строку "Пятница будет
// через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!"
// или "Пятница была вчера :(" в зависимости от текущего дня недели

function getNextFriday(weekday = new Date().getDay() - 1) {
  function formatDays(day) {
    switch (day) {
      case 0:
      case 5:
      case 6:
        return day + " дней";
      case 1:
        return day + " день";
      default:
        return day + " дня";
    }
  }

  const weekdays = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];

  if (weekday == 4) {
    return "Ура, сегодня пятница!";
  }

  let toFr;
  if (weekday < 5) {
    toFr = 4 - weekday;
  } else if (weekday < 6) {
    toFr = 2 + weekday;
  } else {
    toFr = 6;
  }

  return `Сегодня ${weekdays[weekday]}. Пятница через ${formatDays(toFr)}.`;
}

console.log(getNextFriday(0)); // Сегодня понедельник. Пятница через 4 дня.
console.log(getNextFriday(1)); // Сегодня вторник. Пятница через 3 дня.
console.log(getNextFriday(2)); // Сегодня среда. Пятница через 2 дня.
console.log(getNextFriday(3)); // Сегодня четверг. Пятница через 1 день.
console.log(getNextFriday(4)); // Ура, сегодня пятница!
console.log(getNextFriday(5)); // Сегодня суббота. Пятница через 7 дня.
console.log(getNextFriday(6)); // Сегодня воскресенье. Пятница через 6 дней.
console.log(getNextFriday()); // Сегодня среда. Пятница через 2 дня.
