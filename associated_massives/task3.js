let user = {
  name: "Лев Толстой",
  login: "leo_tolstoy",
  reputation: 97,
  total: 900,
};

user.chats = {}; //add chat element to an object

//create 'mama' key:value pair under .chats:
user.chats.mama = [
  { author: "mama", text: "Ты покушал?" },
  { author: "mama", text: "Почему не отвечаешь?" },
  { author: "Вы", text: "Покушал, мам" },
];
//create 'wife' key:value pair under .chats:
user.chats.wife = [
  { author: "вы", text: "Устал и загрустил" },
  { author: "вы", text: "Ленюсь" },
  { author: "wife", text: "zzz" },
];
// print elements under .chats.wife
for (let i = 0; i < user.chats.wife.length; i++) {
  console.log(user.chats.wife[i].author + ": " + user.chats.wife[i].text);
}
