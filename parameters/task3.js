let allMessages = [
  { author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true },
  {
    author: "zloy-zloy",
    text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.",
    edited: false,
  },
  {
    author: "МамаЗузу",
    text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.",
    edited: false,
  },
  {
    author: "void",
    text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.",
    edited: false,
  },
  { author: "mama", text: "Айфон.", edited: false },
  { author: "mama", text: "Почему не отвечаешь?", edited: false },
  {
    author: "void",
    text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».",
    edited: false,
  },
  {
    author: "void",
    text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».",
    edited: false,
  },
  { author: "void", text: "Ленюсь.", edited: false },
  { author: "void", text: "Пока оценивать нечего.", edited: false },
  {
    author: "void",
    text: "Не по-русски как-то получается, хоть и на русском.",
    edited: false,
  },
  {
    author: "ivanov",
    text: "Чип и Дейл прикольно, играл в детстве.",
    edited: false,
  },
  { author: "ivanov", text: "hello, world", edited: true },
  { author: "void", text: "Сейчас напишу книгу по JS.", edited: false },
  { author: "ivanov", text: "Спасибо.", edited: false },
  {
    author: "ivanov",
    text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.",
    edited: true,
  },
  { author: "void", text: "Поделитесь видео-каналами по js.", edited: false },
  { author: "void", text: "Ничего не понравилось.", edited: false },
];

function myFunction(input_param1) {
  editedNumber = 0;
  for (i = 0; i < input_param1.length; i++) {
    if (input_param1[i].edited == true) {
      editedNumber += 1;
    }
  }
  total = input_param1.length;
  nonEditedNumber = total - editedNumber;

  return {
    numberOfEditedNumber: editedNumber,
    numberOfNoneditedNumber: nonEditedNumber,
    total: total,
  };
}

result = myFunction(allMessages);
console.log(result);
