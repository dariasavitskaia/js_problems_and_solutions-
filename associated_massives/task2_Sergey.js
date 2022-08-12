let messages = [
  [
    "zloy-zloy",
    "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались.",
  ],
  ["zloy-zloy", "У Алеши завтра день рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL"],
];
let myArray = [];
for (let i = 0; i < messages.length; i++) {
  myArray.push({
    author: messages[i][0],
    text: messages[i][1],
  });
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i].author + ": " + myArray[i].text);
}
