let likes = 500;
let dislikes = 100;
let editedMessages = 1500;
let allMessages = 5000;

function average(likes, dislikes, editedMessages, allMessages) {
  let diff = likes - dislikes;
  let coef = (allMessages - editedMessages) / allMessages;
  if (allMessages == 0) {
    reputation = 0;
  } else if (dislikes > likes) {
    reputation = diff;
  } else {
    reputation = diff * coef;
  }

  return reputation;
}

rep = average(likes, dislikes, editedMessages, allMessages);

console.log(rep);
// test comment
