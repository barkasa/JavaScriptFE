//HW.1
//функция countWordPrice принимает на вход слово word и массив prices вида
// { letter: <буква>, price: <число> } и возвращает стоимость слова

function countWordPrice(word, prices) {
  const preiceSum = [];
  for (let i = 0; i < word.length; i++) {
    let element = word[i];
    element = prices.find((w) => w.letter === element);

    preiceSum.push(element.price);
  }
  return preiceSum.reduce((acc, value) => acc + value, 0);
}

console.log(
  countWordPrice("волк", [
    { letter: "о", price: 1 },
    { letter: "л", price: 1 },
    { letter: "к", price: 2 },
    { letter: "в", price: 5 },
  ])
); //9

//-------------------------------------------------------------
//HW.2

// ДЗ функция whoTakeABook принимает на вход массив читателей, массив книг,
// массив билетов и название книги. Возвращает имя читателя, который взял
// книгу

function whoTakeABook(readers, books, records, bookName) {
  const bookId = books.findIndex((b) => {
    return b.bookName === bookName;
  });
  const reader = records.findIndex((r) => {
    return r.book === bookId;
  });

  return records[reader].reader;
}

console.log(
  whoTakeABook(
    ["Петя", "Вася", "Коля"],
    [
      { id: 1, bookName: "Сказка о золотой рыбке" },
      { id: 2, bookName: "Чёрный обелиск" },
      { id: 3, bookName: "Норвежский лес" },
    ],
    [
      { reader: "Петя", book: 2 }, // Петя взял "Чёрный обелиск"
      { reader: "Петя", book: 1 }, // Петя взял "Сказка о золотой рыбке"
      { reader: "Коля", book: 3 }, // Коля взял "Норвежский лес"
    ],
    "Чёрный обелиск"
  )
); //Петя
