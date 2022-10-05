//1.
// ДЗ Функция randomPhone возвращает случайно сгенерированный номер телефона в формате "ххх-ххх", где х - цифра от 0 до 9.
//    Номер телефона не может начинаться с 0.

function randomPhone(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(`${randomPhone(111, 999)}-${randomPhone(111, 999)}`);
  
  //2.
  // ДЗ Функция isCube принимает на вход число a и возвращает true, если а - это куб какого-то числа
  
  function isCube(n) {
    // 1<a^3<n
    for (let i = 1; Math.pow(i, 3); i++) {
      if (Math.pow(i, 3) === n) {
        return true;
      }
    }
    return false;
  }
  
  console.log(isCube(27)); //true
  
  //3.
  // ДЗ Функция triangleSquare принимает стороны треугольника a, b и c и возвращает его площадь. Для расчёта площади   
  //    можно воспользоваться формулой Герона.
  
  function triangleSquare(a, b, c) {
    if (a > b + c || b > a + c || c > a + b) {
      return false;
    }
    const p = (a + b + c) / 2;
    return Math.ceil((p * (p - a) * (p - b) * (p - c)) ** 0.5);
  }
  
  console.log(triangleSquare(5, 4, 30)); //false
  console.log(triangleSquare(4, 6, 9)); //10
  
  //================================================================================
  
  //2.1
  // ДЗ Функция getDistance принимает x1, y1, x2, y2 (координаты двух точек в Евклидовом пространстве) и возвращает //
  //    расстояние между ними
  
  function getDistance(x1, y1, x2, y2) {
    let dinstance = Math.pow((x2 - x1) ** 2 + (y2 - y1) ** 2, 1 / 2);
    if (x2 < x1 || y2 < y1) {
      return false;
    }
  
    return Math.round(dinstance);
  }
  console.log(getDistance(2, 2, 4, 4)); // 3